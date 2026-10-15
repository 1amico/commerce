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
  const products = getProducts(locale);

  const sections = [
    { title: t.eggs, category: "eggs" as const, notes: [] as string[] },
    { title: t.honey, category: "honey" as const, notes: [] as string[] },
    {
      title: t.rooms,
      category: "accommodation" as const,
      notes: [t.cleaningNote, t.availabilityNote],
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-12 text-4xl font-bold">{t.shopTitle}</h1>

        {sections.map((section) => (
          <section key={section.category} className="mb-16">
            <h2 className="mb-4 text-3xl font-bold">{section.title}</h2>
            {section.notes.length > 0 && (
              <div className="mb-6 space-y-1 rounded-lg bg-amber-50 p-4 text-sm text-neutral-700">
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
