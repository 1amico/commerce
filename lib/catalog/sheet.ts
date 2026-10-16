import { isLocale, locales, type Locale } from "../i18n";
import type { Category, Product } from "../products";

// Il catalogo vive in un foglio Google pubblicato come CSV, così i prezzi si
// cambiano senza passare da un deploy. Se il foglio non risponde o è malformato
// il sito continua con il catalogo compilato nel codice: un negozio che non
// carica i prodotti è peggio di un negozio con un prezzo vecchio di un'ora.

const CATEGORIES: Category[] = [
  "eggs",
  "honey",
  "accommodation",
  "wine",
  "sparkling",
  "oil",
  "ev-charging",
];

export function parseCatalogueCsv(csv: string): Product[] {
  const rows = parseRows(csv);
  if (rows.length < 2) throw new Error("foglio vuoto");

  const header = rows[0]!.map((h) => h.trim());
  const col = (name: string) => header.indexOf(name);

  const idCol = col("id");
  const priceCol = col("price");
  const categoryCol = col("category");
  if (idCol < 0 || priceCol < 0 || categoryCol < 0) {
    throw new Error("mancano le colonne id, price o category");
  }

  const products: Product[] = [];

  for (const row of rows.slice(1)) {
    const id = row[idCol]?.trim();
    if (!id) continue;

    const category = row[categoryCol]?.trim() as Category;
    if (!CATEGORIES.includes(category)) {
      throw new Error(`categoria sconosciuta "${category}" per ${id}`);
    }

    const price = Number.parseFloat(
      (row[priceCol] ?? "").replace(",", ".").replace(/[^\d.]/g, ""),
    );
    if (!Number.isFinite(price) || price < 0) {
      throw new Error(`prezzo non valido per ${id}`);
    }

    const t = {} as Product["t"];
    for (const locale of locales) {
      const name = row[col(`name_${locale}`)]?.trim();
      const description = row[col(`desc_${locale}`)]?.trim() ?? "";
      if (!name) throw new Error(`manca name_${locale} per ${id}`);
      t[locale] = { name, description };
    }

    const brand = row[col("brand")]?.trim();
    const image = row[col("image")]?.trim();
    const yes = (v?: string) =>
      ["si", "sì", "yes", "x", "true", "1"].includes(
        (v ?? "").trim().toLowerCase(),
      );
    const soldOut = row[col("soldOut")];
    const quoteOnly = row[col("quoteOnly")];

    products.push({
      id,
      price,
      category,
      t,
      ...(brand && { brand }),
      ...(image && { image }),
      ...(yes(soldOut) && { soldOut: true }),
      ...(yes(quoteOnly) && { quoteOnly: true }),
    });
  }

  if (products.length === 0) throw new Error("nessun prodotto valido");
  return products;
}

export async function fetchCatalogue(): Promise<Product[] | null> {
  const url = process.env.CATALOGUE_SHEET_URL;
  if (!url) return null;

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return parseCatalogueCsv(await res.text());
  } catch (error) {
    console.error(
      "Catalogo dal foglio non caricato, uso quello interno:",
      error,
    );
    return null;
  }
}

function parseRows(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i]!;

    if (quoted) {
      if (char === '"') {
        if (csv[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n" || char === "\r") {
      if (char === "\r" && csv[i + 1] === "\n") i++;
      row.push(field);
      if (row.some((c) => c.trim())) rows.push(row);
      row = [];
      field = "";
    } else field += char;
  }

  row.push(field);
  if (row.some((c) => c.trim())) rows.push(row);
  return rows;
}

export { isLocale, type Locale };
