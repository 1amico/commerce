import Stripe from "stripe";
import { normaliseRef } from "lib/affiliate";
import { defaultLocale, isLocale } from "lib/i18n";
import { getProductById, localize, type Product } from "lib/products";
import {
  cartWeightKg,
  shippableCountries,
  shippingOptionsFor,
} from "lib/shipping";
import { baseUrl } from "lib/utils";

const AGE_CONFIRMATION: Record<string, string> = {
  it: "Confermo di avere almeno 18 anni. La vendita di alcolici ai minori è vietata.",
  en: "I confirm that I am at least 18 years old. Sale of alcohol to minors is prohibited.",
  fr: "Je confirme avoir au moins 18 ans. La vente d'alcool aux mineurs est interdite.",
  de: "Ich bestätige, dass ich mindestens 18 Jahre alt bin. Der Verkauf von Alkohol an Minderjährige ist verboten.",
  es: "Confirmo que tengo al menos 18 años. La venta de alcohol a menores está prohibida.",
};

export async function POST(request: Request) {
  const { items, locale: rawLocale, ref: rawRef } = await request.json();
  const ref = normaliseRef(rawRef);
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  if (!Array.isArray(items) || items.length === 0) {
    return Response.json({ error: "Carrello vuoto" }, { status: 400 });
  }

  // I prezzi vengono sempre dal catalogo server, mai dal client.
  const lineItems = [];
  const lines: { product: Product; quantity: number }[] = [];

  for (const item of items) {
    const product = await getProductById(item?.id);
    if (!product) {
      return Response.json(
        { error: `Prodotto non valido: ${item?.id}` },
        { status: 400 },
      );
    }
    if (product.quoteOnly || product.soldOut) {
      return Response.json(
        { error: `Prodotto non acquistabile online: ${product.id}` },
        { status: 400 },
      );
    }

    const quantity = Number.parseInt(item?.quantity, 10);
    if (!Number.isFinite(quantity) || quantity < 1 || quantity > 99) {
      return Response.json({ error: "Quantità non valida" }, { status: 400 });
    }

    const { name, description } = localize(product, locale);
    lines.push({ product, quantity });

    lineItems.push({
      price_data: {
        currency: "eur",
        product_data: {
          name:
            product.category === "accommodation" && item.checkIn
              ? `${name} (${item.checkIn} → ${item.checkOut})`
              : name,
          description,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity,
    });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return Response.json({ error: "Stripe non configurato" }, { status: 500 });
  }

  const categories = [...new Set(lines.map((l) => l.product.category))];
  const physical = categories.filter((c) => c !== "accommodation");
  const hasAlcohol = categories.some((c) => c === "wine" || c === "sparkling");

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale,
      line_items: lineItems,
      ...(ref && { metadata: { affiliate: ref } }),
      success_url: `${baseUrl}/${locale}/success`,
      cancel_url: `${baseUrl}/${locale}/cart`,
      // Un soggiorno non si spedisce: indirizzo e corriere compaiono solo se
      // nel carrello c'è merce fisica.
      ...(physical.length > 0 && {
        shipping_address_collection: {
          allowed_countries: shippableCountries(
            physical,
          ) as Stripe.Checkout.SessionCreateParams.ShippingAddressCollection.AllowedCountry[],
        },
        shipping_options: shippingOptionsFor(
          cartWeightKg(lines),
          physical,
          locale,
        ),
      }),
      ...(hasAlcohol && {
        consent_collection: { terms_of_service: "required" as const },
        custom_text: {
          terms_of_service_acceptance: {
            message: AGE_CONFIRMATION[locale] ?? AGE_CONFIRMATION.it!,
          },
        },
      }),
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return Response.json(
      { error: "Errore durante il checkout" },
      { status: 500 },
    );
  }
}
