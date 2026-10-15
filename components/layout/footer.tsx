import Link from "next/link";
import type { Dictionary } from "lib/i18n";

export default function Footer({ t }: { t: Dictionary }) {
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

      <div className="border-t border-line py-6 text-center text-xs tracking-wide">
        &copy; {new Date().getFullYear()} Ca' Paradiso Cagli
      </div>
    </footer>
  );
}
