import Link from "next/link";
import Footer from "components/layout/footer";
import { products } from "lib/products";

export const metadata = {
  description:
    "Uova naturali, miele artigianale e ospitalità a Cagli, nelle Marche.",
  openGraph: { type: "website" },
};

export default function HomePage() {
  const highlights = [
    products.find((p) => p.category === "eggs"),
    products.find((p) => p.category === "honey"),
    products.find((p) => p.category === "accommodation"),
  ].filter(Boolean);

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h1 className="text-5xl font-bold tracking-tight">Ca' Paradiso Cagli</h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-neutral-600">
          Uova naturali, miele artigianale e ospitalità nel cuore delle Marche.
        </p>
        <Link
          href="/shop"
          className="mt-10 inline-block rounded bg-black px-8 py-4 text-lg font-medium text-white hover:bg-neutral-800"
        >
          Vai al Negozio
        </Link>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="grid gap-6 sm:grid-cols-3">
          {highlights.map((product: any) => (
            <Link
              key={product.id}
              href="/shop"
              className="rounded-lg border border-neutral-200 bg-white p-6 hover:border-neutral-400"
            >
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="mt-2 text-sm text-neutral-600">
                {product.description}
              </p>
              <p className="mt-4 text-xl font-bold text-green-700">
                da €{product.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
