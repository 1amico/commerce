import Image from "next/image";
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
      <section className="relative isolate flex min-h-[78vh] items-center justify-center overflow-hidden">
        <Image
          src="/photos/hero-tramonto.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/65" />

        <div className="mx-auto max-w-3xl px-6 py-24 text-center text-cream">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-cream/80">
            Cagli · Marche
          </p>
          <h1 className="text-6xl leading-[1.05] tracking-tight drop-shadow-sm sm:text-7xl">
            Ca' Paradiso
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-cream/90">
            {t.tagline}
          </p>
          <Link
            href="/shop"
            className="mt-12 inline-block border border-cream/70 px-10 py-4 text-sm uppercase tracking-[0.15em] text-cream backdrop-blur-sm transition-colors hover:bg-cream hover:text-ink"
          >
            {t.goToShop}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="grid gap-px bg-line sm:grid-cols-3">
          {highlights.map(({ label, product }) => (
            <Link
              key={product!.id}
              href="/shop"
              className="group bg-cream transition-colors hover:bg-white"
            >
              {product!.image && (
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={product!.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-8">
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
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer t={t} locale={locale} />
    </>
  );
}
