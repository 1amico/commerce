import Link from "next/link";
import type { Dictionary } from "lib/i18n";

export function Navbar({ t }: { t: Dictionary }) {
  return (
    <nav className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold">
          Ca' Paradiso Cagli
        </Link>

        <div className="flex gap-6">
          <Link href="/shop" className="hover:text-neutral-600">
            {t.nav.shop}
          </Link>
          <Link href="/cart" className="hover:text-neutral-600">
            {t.nav.cart}
          </Link>
          <Link href="#contact" className="hover:text-neutral-600">
            {t.nav.contact}
          </Link>
        </div>
      </div>
    </nav>
  );
}
