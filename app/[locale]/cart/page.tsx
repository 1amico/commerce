import { notFound } from "next/navigation";
import Footer from "components/layout/footer";
import { CartView } from "components/cart-view";
import { getDictionary, isLocale, locales } from "lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CartPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = getDictionary(locale);

  return (
    <>
      <CartView t={t} locale={locale} />
      <Footer t={t} />
    </>
  );
}
