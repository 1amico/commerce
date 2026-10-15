import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "components/layout/footer";
import { getDictionary, isLocale, locales } from "lib/i18n";
import { getProducts } from "lib/products";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);
  const products = await getProducts(locale);
  const highlights = (["eggs", "honey", "accommodation"] as const).map(
    (category) => products.find((p) => p.category === category)!
  );

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Ca' Paradiso Cagli</h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-neutral-600">
          {t.tagline}
        </p>
        <Link
          href="/shop"
          className="mt-10 inline-block rounded bg-black px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800"
        >
          {t.goToShop}
        </Link>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((product) => (
            <Link
              key={product.id}
              href="/shop"
              className="rounded-lg border border-neutral-200 bg-white p-6 hover:border-neutral-400"
            >
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {product.description}
              </p>
              <p className="mt-4 text-xl font-bold text-green-700">
                {t.from} €{product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer t={t} />
    </>
  );
}
