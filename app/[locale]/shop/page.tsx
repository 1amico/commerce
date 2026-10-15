import { notFound } from "next/navigation";
import Footer from "components/layout/footer";
import { ProductCard } from "components/product-card";
import { getDictionary, isLocale, locales } from "lib/i18n";
import { getProducts } from "lib/products";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale);
  return { title: t.nav.shop, description: t.tagline };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const products = await getProducts(locale);

  const sections = [
    { title: t.eggs, category: "eggs" as const, notes: [] as string[] },
    { title: t.honey, category: "honey" as const, notes: [] as string[] },
    { title: t.wine, category: "wine" as const, notes: [] as string[] },
    {
      title: t.sparkling,
      category: "sparkling" as const,
      notes: [] as string[],
    },
    { title: t.oil, category: "oil" as const, notes: [] as string[] },
    {
      title: t.evCharging,
      category: "ev-charging" as const,
      notes: [] as string[],
    },
    {
      title: t.rooms,
      category: "accommodation" as const,
      notes: [t.cleaningNote, t.availabilityNote],
    },
  ].filter((s) => products.some((p) => p.category === s.category));

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="mb-16 text-5xl tracking-tight">{t.shopTitle}</h1>

        {sections.map((section) => (
          <section key={section.category} className="mb-20">
            <h2 className="mb-5 text-3xl tracking-tight">{section.title}</h2>
            {section.notes.length > 0 && (
              <div className="mb-8 space-y-1 border-l-2 border-ochre bg-cream-deep px-5 py-4 text-sm leading-relaxed text-ink-soft">
                {section.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            )}
            <div className="grid gap-6 sm:grid-cols-2">
              {products
                .filter((p) => p.category === section.category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} t={t} />
                ))}
            </div>
          </section>
        ))}
      </div>
      <Footer t={t} />
    </>
  );
}
