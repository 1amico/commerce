import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="border-t border-neutral-200 bg-white text-sm text-neutral-600"
    >
      <div className="mx-auto grid max-w-4xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-bold text-black">Ca' Paradiso Cagli</p>
          <p className="mt-2">Agriturismo e prodotti artigianali</p>
        </div>

        <div>
          <p className="font-bold text-black">Contatti</p>
          <p className="mt-2">
            <a href="mailto:info@caparadiso.com" className="hover:underline">
              info@caparadiso.com
            </a>
          </p>
        </div>

        <div>
          <p className="font-bold text-black">Negozio</p>
          <p className="mt-2">
            <Link href="/shop" className="hover:underline">
              Prodotti e ospitalità
            </Link>
          </p>
          <p>
            <Link href="/cart" className="hover:underline">
              Carrello
            </Link>
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-200 py-6 text-center">
        &copy; {year} Ca' Paradiso Cagli
      </div>
    </footer>
  );
}
