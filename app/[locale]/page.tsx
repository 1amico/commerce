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

  const highlights = (
    [
      ["eggs", t.eggs],
      ["honey", t.honey],
      ["accommodation", t.rooms],
    ] as const
  )
    .map(([category, label]) => ({
      label,
      product: products.find((p) => p.category === category),
    }))
    .filter((h) => h.product);

  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-ochre">
          Cagli · Marche
        </p>
        <h1 className="text-6xl leading-[1.05] tracking-tight">Ca' Paradiso</h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
          {t.tagline}
        </p>
        <Link
          href="/shop"
          className="mt-12 inline-block border border-ink px-10 py-4 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream"
        >
          {t.goToShop}
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="grid gap-px bg-line sm:grid-cols-3">
          {highlights.map(({ label, product }) => (
            <Link
              key={product!.id}
              href="/shop"
              className="group bg-cream p-8 transition-colors hover:bg-white"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-ochre">
                {label}
              </p>
              <h2 className="text-2xl leading-snug group-hover:text-olive">
                {product!.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {product!.description}
              </p>
              <p className="mt-5 font-display text-xl">
                {t.from} €{product!.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer t={t} />
    </>
  );
}
