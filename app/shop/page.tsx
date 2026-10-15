import { products } from "lib/products";
import Footer from "components/layout/footer";
import { ProductCard } from "components/product-card";

export const metadata = {
  title: "Negozio",
  description:
    "Uova fresche, miele naturale e ospitalità da Ca' Paradiso Cagli",
};

const sections = [
  { title: "Uova Naturali", category: "eggs" as const },
  { title: "Miele", category: "honey" as const },
  { title: "Ospitalità", category: "accommodation" as const },
];

export default function ShopPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-12 text-4xl font-bold">Negozio Ca' Paradiso</h1>

        {sections.map((section) => (
          <section key={section.category} className="mb-16">
            <h2 className="mb-6 text-3xl font-bold">{section.title}</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {products
                .filter((p) => p.category === section.category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </>
  );
}
