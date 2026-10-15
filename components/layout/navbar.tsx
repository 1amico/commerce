import Link from "next/link";

export function Navbar() {
  return (
    <nav className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            🌾 Ca' Paradiso Cagli
          </Link>

          <div className="flex gap-8">
            <Link href="/shop" className="hover:text-neutral-600">
              Negozio
            </Link>
            <Link href="/cart" className="hover:text-neutral-600">
              Carrello
            </Link>
            <Link href="#contact" className="hover:text-neutral-600">
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
