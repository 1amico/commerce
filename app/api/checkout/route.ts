import Stripe from "stripe";
import { defaultLocale, isLocale } from "lib/i18n";
import { getProductById, localize } from "lib/products";
import { shippingCountries, toStripeShippingOptions } from "lib/shipping";
import { baseUrl } from "lib/utils";

export async function POST(request: Request) {
  const { items, locale: rawLocale } = await request.json();
  const locale = isLocale(rawLocale) ? rawLocale : defaultLocale;

  if (!Array.isArray(items) || items.length === 0) {
    return Response.json({ error: "Carrello vuoto" }, { status: 400 });
  }

  // I prezzi vengono sempre dal catalogo server, mai dal client.
  const lineItems = [];
  let needsShipping = false;
  for (const item of items) {
    const product = getProductById(item?.id);
    if (!product) {
      return Response.json(
        { error: `Prodotto non valido: ${item?.id}` },
        { status: 400 }
      );
    }

    const quantity = Number.parseInt(item?.quantity, 10);
    if (!Number.isFinite(quantity) || quantity < 1 || quantity > 99) {
      return Response.json({ error: "Quantità non valida" }, { status: 400 });
    }

    if (product.category !== "accommodation") needsShipping = true;

    const { name, description } = localize(product, locale);

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

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      locale,
      line_items: lineItems,
      success_url: `${baseUrl}/${locale}/success`,
      cancel_url: `${baseUrl}/${locale}/cart`,
      // Un soggiorno non si spedisce: le opzioni compaiono solo se nel
      // carrello c'è almeno un prodotto fisico.
      ...(needsShipping && {
        shipping_address_collection: {
          allowed_countries: [...shippingCountries],
        },
        shipping_options: toStripeShippingOptions(locale),
      }),
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return Response.json(
      { error: "Errore durante il checkout" },
      { status: 500 }
    );
  }
}
