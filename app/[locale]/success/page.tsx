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
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">{t.successTitle}</h1>
        <p className="mb-10 text-xl text-neutral-600">{t.successLead}</p>

        <div className="space-y-4 rounded-lg bg-neutral-100 p-8 text-left">
          <p>{t.successEmail}</p>
          <p>{t.successBooking}</p>
          <p className="text-neutral-600">
            Ca' Paradiso Cagli — info@caparadiso.com
          </p>
        </div>

        <a
          href="/"
          className="mt-8 inline-block rounded bg-black px-6 py-3 text-white hover:bg-neutral-800"
        >
          {t.backHome}
        </a>
      </div>
      <Footer t={t} />
    </>
  );
}
