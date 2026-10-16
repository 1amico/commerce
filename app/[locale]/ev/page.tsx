import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { evLocales, getEvCopy } from "lib/ev";
import { isLocale } from "lib/i18n";
import { getProducts } from "lib/products";

export function generateStaticParams() {
  return evLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getEvCopy(locale);
  return { title: "EVC 2", description: c.lead };
}

export default async function EvPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const c = getEvCopy(locale);
  const chargers = (await getProducts(locale)).filter(
    (p) => p.category === "ev-charging",
  );
  const mailto = `mailto:info@caparadiso.com?subject=${encodeURIComponent("EVC 2 — " + c.cta)}`;

  return (
    <div className="bg-[#10151c] text-[#e6ebf0]">
      <header className="border-b border-[#2b3742]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <span className="font-display text-xl tracking-wide">EVC 2</span>
          <Link
            href="/shop"
            className="text-xs uppercase tracking-[0.15em] text-[#93a1ae] hover:text-[#f2b705]"
          >
            {c.backToShop}
          </Link>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-[#2b3742]">
        <Image
          src="/photos/ricarica-ev.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-30"
        />
        <div className="mx-auto max-w-5xl px-6 py-28">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-[#f2b705]">
            {c.eyebrow}
          </p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl">
            {c.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#93a1ae]">
            {c.lead}
          </p>
          <a
            href={mailto}
            className="mt-10 inline-block bg-[#f2b705] px-9 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#10151c] transition-opacity hover:opacity-90"
          >
            {c.cta}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 font-display text-3xl tracking-tight">
          {c.modelsTitle}
        </h2>
        <div className="grid gap-px bg-[#2b3742] sm:grid-cols-3">
          {chargers.map((p) => (
            <div key={p.id} className="bg-[#182029] p-7">
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#93a1ae]">
                {p.description}
              </p>
              <a
                href={`mailto:info@caparadiso.com?subject=${encodeURIComponent(p.name)}`}
                className="mt-6 inline-block border border-[#f2b705] px-5 py-2.5 text-xs uppercase tracking-[0.12em] text-[#f2b705] transition-colors hover:bg-[#f2b705] hover:text-[#10151c]"
              >
                {c.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#2b3742] bg-[#141a22]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-10 font-display text-3xl tracking-tight">
            {c.specsTitle}
          </h2>
          <dl className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {c.specs.map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between gap-6 border-b border-[#2b3742] pb-4"
              >
                <dt className="font-mono text-xs uppercase tracking-[0.12em] text-[#93a1ae]">
                  {label}
                </dt>
                <dd className="text-right text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 font-display text-3xl tracking-tight">
          {c.whyTitle}
        </h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {c.why.map(([title, text]) => (
            <div key={title}>
              <h3 className="font-display text-xl text-[#f2b705]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#93a1ae]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#2b3742] bg-[#182029]">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl tracking-tight">
            {c.contactTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[#93a1ae]">
            {c.contactLead}
          </p>
          <a
            href={mailto}
            className="mt-9 inline-block bg-[#f2b705] px-9 py-4 text-sm font-medium uppercase tracking-[0.12em] text-[#10151c] transition-opacity hover:opacity-90"
          >
            info@caparadiso.com
          </a>
        </div>
      </section>

      <footer className="border-t border-[#2b3742]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <p className="text-xs leading-relaxed text-[#6d7983]">
            {c.disclaimer}
          </p>
        </div>
      </footer>
    </div>
  );
}
