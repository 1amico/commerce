import Link from "next/link";
import type { Dictionary, Locale } from "lib/i18n";
import { getLegalDoc, legalPath } from "lib/legal";

export default function Footer({
  t,
  locale,
}: {
  t: Dictionary;
  locale: Locale;
}) {
  const legal = (["terms", "returns", "privacy"] as const).map((slug) => ({
    href: legalPath(locale, slug),
    label: getLegalDoc(locale, slug).title,
  }));

  return (
    <footer
      id="contact"
      className="border-t border-line bg-cream-deep text-sm text-ink-soft"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-ink">Ca' Paradiso Cagli</p>
          <p className="mt-3 leading-relaxed">{t.footerTagline}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ochre">
            {t.contact}
          </p>
          <p className="mt-3">
            <a href="mailto:info@caparadiso.com" className="hover:text-ink">
              info@caparadiso.com
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ochre">
            {t.nav.shop}
          </p>
          <p className="mt-3">
            <Link href="/shop" className="hover:text-ink">
              {t.shopTitle}
            </Link>
          </p>
          <p className="mt-1">
            <Link href="/cart" className="hover:text-ink">
              {t.nav.cart}
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 text-xs">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="border-t border-line px-6 py-5 text-center text-xs leading-relaxed">
          &copy; {new Date().getFullYear()} Siniscalco Matteo Azienda Agricola ·
          Strada Monte Peruzzo 11, 61043 Cagli (PU) · info@caparadiso.com
        </p>
      </div>
    </footer>
  );
}
