import { notFound } from "next/navigation";
import Footer from "components/layout/footer";
import { getDictionary, isLocale, locales } from "lib/i18n";
import { ClearCart } from "./clear-cart";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function SuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <>
      <ClearCart />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="mb-5 text-5xl tracking-tight">{t.successTitle}</h1>
        <p className="mb-12 text-lg text-ink-soft">{t.successLead}</p>

        <div className="space-y-4 border-l-2 border-ochre bg-cream-deep px-7 py-8 text-left leading-relaxed text-ink-soft">
          <p>{t.successEmail}</p>
          <p>{t.successBooking}</p>
          <p className="text-ink-soft">
            Ca' Paradiso Cagli — info@caparadiso.com
          </p>
        </div>

        <a
          href="/"
          className="mt-12 inline-block border border-ink px-8 py-3 text-sm uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-cream"
        >
          {t.backHome}
        </a>
      </div>
      <Footer t={t} />
    </>
  );
}
