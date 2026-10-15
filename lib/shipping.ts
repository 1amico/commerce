import type { Locale } from "./i18n";

// ─────────────────────────────────────────────────────────────────────────────
// TARIFFE DI SPEDIZIONE — unico posto da aggiornare.
// Sono tariffe fisse: finché non c'è un contratto con un corriere o un
// aggregatore (Sendcloud, Qapla', Spedire…), nessuno espone i prezzi reali via
// API. Quando quell'account esisterà, questa lista diventa una chiamata HTTP e
// il resto del codice non cambia.
// Importi in euro, IVA inclusa. Verificare almeno una volta l'anno.
// Ultimo controllo: 2026-10-15
// ─────────────────────────────────────────────────────────────────────────────

export interface ShippingOption {
  id: string;
  price: number;
  minDays: number;
  maxDays: number;
  zone: "pickup" | "it" | "eu";
  label: Record<Locale, string>;
}

export const shippingOptions: ShippingOption[] = [
  {
    id: "pickup",
    price: 0,
    minDays: 1,
    maxDays: 2,
    zone: "pickup",
    label: {
      it: "Ritiro in azienda a Cagli",
      en: "Pick up at the farm in Cagli",
      fr: "Retrait à la ferme à Cagli",
      de: "Abholung auf dem Hof in Cagli",
      es: "Recogida en la finca de Cagli",
    },
  },
  {
    id: "it-standard",
    price: 9.9,
    minDays: 3,
    maxDays: 5,
    zone: "it",
    label: {
      it: "Spedizione in Italia",
      en: "Shipping within Italy",
      fr: "Livraison en Italie",
      de: "Versand innerhalb Italiens",
      es: "Envío a Italia",
    },
  },
  {
    id: "it-express",
    price: 14.9,
    minDays: 1,
    maxDays: 2,
    zone: "it",
    label: {
      it: "Spedizione espressa in Italia",
      en: "Express shipping within Italy",
      fr: "Livraison express en Italie",
      de: "Expressversand innerhalb Italiens",
      es: "Envío exprés a Italia",
    },
  },
  {
    id: "eu-standard",
    price: 24.9,
    minDays: 5,
    maxDays: 8,
    zone: "eu",
    label: {
      it: "Spedizione in Europa",
      en: "Shipping within Europe",
      fr: "Livraison en Europe",
      de: "Versand innerhalb Europas",
      es: "Envío a Europa",
    },
  },
];

export const shippingCountries = [
  "IT", "AT", "BE", "BG", "HR", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI",
  "ES", "SE",
] as const;

export function toStripeShippingOptions(locale: Locale) {
  return shippingOptions.map((option) => ({
    shipping_rate_data: {
      type: "fixed_amount" as const,
      fixed_amount: {
        amount: Math.round(option.price * 100),
        currency: "eur",
      },
      display_name: option.label[locale],
      delivery_estimate: {
        minimum: { unit: "business_day" as const, value: option.minDays },
        maximum: { unit: "business_day" as const, value: option.maxDays },
      },
    },
  }));
}
