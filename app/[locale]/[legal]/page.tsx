import { notFound } from "next/navigation";
import Footer from "components/layout/footer";
import { getDictionary, isLocale, locales, type Locale } from "lib/i18n";
import {
  getLegalDoc,
  legalPaths,
  type LegalSlug,
} from "lib/legal";

const SLUGS = Object.keys(legalPaths) as LegalSlug[];

function slugFor(locale: Locale, segment: string): LegalSlug | null {
  return SLUGS.find((s) => legalPaths[s][locale] === segment) ?? null;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SLUGS.map((slug) => ({ locale, legal: legalPaths[slug][locale] }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; legal: string }>;
}) {
  const { locale, legal } = await params;
  if (!isLocale(locale)) return {};
  const slug = slugFor(locale, legal);
  return slug ? { title: getLegalDoc(locale, slug).title } : {};
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string; legal: string }>;
}) {
  const { locale, legal } = await params;
  if (!isLocale(locale)) notFound();

  const slug = slugFor(locale, legal);
  if (!slug) notFound();

  const doc = getLegalDoc(locale, slug);
  const t = getDictionary(locale);

  return (
    <>
      <article className="mx-auto max-w-2xl px-6 py-20">
        <h1 className="text-4xl tracking-tight">{doc.title}</h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
          {doc.updated}
        </p>

        <div className="mt-14 space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl tracking-tight">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
      <Footer t={t} locale={locale} />
    </>
  );
}
