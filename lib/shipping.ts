import type { Category, Product } from "./products";
import type { Locale } from "./i18n";

// ─────────────────────────────────────────────────────────────────────────────
// SPEDIZIONI — unico posto da aggiornare.
// Tariffe fisse per scaglioni di peso: finché non c'è un contratto con un
// corriere o un aggregatore (Sendcloud, Qapla', Spedire…) nessuno espone i
// prezzi reali via API. Quando quell'account esisterà, questa tabella diventa
// una chiamata HTTP e il resto del codice non cambia.
// Importi in euro, IVA inclusa. Ultimo controllo: 2026-10-16.
// ─────────────────────────────────────────────────────────────────────────────

/** Peso spedibile per unità, in grammi: imballo compreso. */
const WEIGHTS: Record<Category, number> = {
  eggs: 700,
  honey: 1300,
  wine: 1600,
  sparkling: 1800,
  oil: 1100,
  "ev-charging": 6000,
  accommodation: 0,
};

/** Alcolici: la vendita a distanza fuori dall'Italia fa scattare l'accisa del
 *  paese di destinazione, che richiede una registrazione fiscale lì. Finché
 *  non c'è, vino e bollicine si spediscono solo in Italia. */
const ITALY_ONLY: Category[] = ["wine", "sparkling"];

const EU = [
  "IT",
  "AT",
  "BE",
  "BG",
  "HR",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
] as const;

/** Fuori UE: dogana e IVA all'importazione a carico del destinatario. */
const NON_EU = ["CH"] as const;

interface Tier {
  maxKg: number;
  it: number;
  eu: number;
  nonEu: number;
}

const TIERS: Tier[] = [
  { maxKg: 2, it: 7.9, eu: 19.9, nonEu: 34.9 },
  { maxKg: 5, it: 9.9, eu: 24.9, nonEu: 44.9 },
  { maxKg: 10, it: 13.9, eu: 34.9, nonEu: 59.9 },
  { maxKg: 25, it: 19.9, eu: 54.9, nonEu: 89.9 },
  { maxKg: Infinity, it: 29.9, eu: 79.9, nonEu: 129.9 },
];

const EXPRESS_SURCHARGE = 6.0;

export function shippableCountries(categories: Category[]): string[] {
  const hasAlcohol = categories.some((c) => ITALY_ONLY.includes(c));
  if (hasAlcohol) return ["IT"];
  const hasEv = categories.includes("ev-charging");
  return hasEv ? [...EU, ...NON_EU] : [...EU];
}

export function cartWeightKg(
  lines: { product: Product; quantity: number }[],
): number {
  const grams = lines.reduce(
    (sum, l) => sum + WEIGHTS[l.product.category] * l.quantity,
    0,
  );
  return grams / 1000;
}

function tierFor(weightKg: number): Tier {
  return TIERS.find((t) => weightKg <= t.maxKg) ?? TIERS[TIERS.length - 1]!;
}

const LABELS = {
  pickup: {
    it: "Ritiro in azienda a Cagli",
    en: "Pick up at the farm in Cagli",
    fr: "Retrait à la ferme à Cagli",
    de: "Abholung auf dem Hof in Cagli",
    es: "Recogida en la finca de Cagli",
  },
  standard: {
    it: "Spedizione standard",
    en: "Standard shipping",
    fr: "Livraison standard",
    de: "Standardversand",
    es: "Envío estándar",
  },
  express: {
    it: "Spedizione espressa",
    en: "Express shipping",
    fr: "Livraison express",
    de: "Expressversand",
    es: "Envío exprés",
  },
} satisfies Record<string, Record<Locale, string>>;

function rate(name: string, amount: number, minDays: number, maxDays: number) {
  return {
    shipping_rate_data: {
      type: "fixed_amount" as const,
      fixed_amount: { amount: Math.round(amount * 100), currency: "eur" },
      display_name: name,
      delivery_estimate: {
        minimum: { unit: "business_day" as const, value: minDays },
        maximum: { unit: "business_day" as const, value: maxDays },
      },
    },
  };
}

export function shippingOptionsFor(
  weightKg: number,
  categories: Category[],
  locale: Locale,
) {
  const tier = tierFor(weightKg);
  const onlyItaly = shippableCountries(categories).length === 1;
  const base = onlyItaly ? tier.it : Math.max(tier.it, tier.eu);

  return [
    rate(LABELS.pickup[locale], 0, 1, 2),
    rate(LABELS.standard[locale], base, 3, 6),
    rate(LABELS.express[locale], base + EXPRESS_SURCHARGE, 1, 2),
  ];
}
