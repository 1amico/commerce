import Link from "next/link";
import type { Dictionary } from "lib/i18n";

export function Navbar({ t }: { t: Dictionary }) {
  return (
    <nav className="sticky top-0 z-20 border-b border-line bg-cream/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-ink hover:text-olive"
        >
          Ca'&nbsp;Paradiso <span className="text-ink-soft">Cagli</span>
        </Link>

        <div className="flex gap-7 text-sm tracking-wide text-ink-soft">
          <Link href="/shop" className="hover:text-ink">
            {t.nav.shop}
          </Link>
          <Link href="/cart" className="hover:text-ink">
            {t.nav.cart}
          </Link>
          <Link href="#contact" className="hover:text-ink">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
}
