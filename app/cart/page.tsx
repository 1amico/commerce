"use client";

import { useEffect, useState } from "react";
import Footer from "components/layout/footer";

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem("cart") || "[]"));
    } catch {
      setItems([]);
    }
    setLoaded(true);
  }, []);

  const removeItem = (index: number) => {
    const next = items.filter((_, i) => i !== index);
    setItems(next);
    try {
      localStorage.setItem("cart", JSON.stringify(next));
    } catch {}
  };

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const checkout = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Errore durante il checkout");
        setBusy(false);
      }
    } catch {
      alert("Errore di rete durante il checkout");
      setBusy(false);
    }
  };

  if (!loaded) {
    return <div className="mx-auto max-w-4xl px-4 py-16">Caricamento…</div>;
  }

  if (items.length === 0) {
    return (
      <>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">Carrello</h1>
          <p className="text-xl text-neutral-600">Il tuo carrello è vuoto</p>
          <a
            href="/shop"
            className="mt-8 inline-block rounded bg-black px-6 py-3 text-white hover:bg-neutral-800"
          >
            Vai al Negozio
          </a>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Carrello</h1>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center justify-between border-b border-neutral-200 pb-4"
            >
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-sm text-neutral-600">
                  Quantità: {item.quantity}
                </p>
                <button
                  onClick={() => removeItem(idx)}
                  className="mt-1 text-sm text-red-600 hover:underline"
                >
                  Rimuovi
                </button>
              </div>
              <span className="text-lg font-bold">
                €{(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4 border-t border-neutral-200 pt-8">
          <div className="flex items-center justify-between text-2xl font-bold">
            <span>Totale</span>
            <span>€{total.toFixed(2)}</span>
          </div>

          <button
            onClick={checkout}
            disabled={busy}
            className="w-full rounded bg-green-700 px-6 py-4 text-lg font-bold text-white hover:bg-green-800 disabled:opacity-50"
          >
            {busy ? "Attendere…" : "Procedi al Pagamento"}
          </button>

          <a
            href="/shop"
            className="block text-center text-neutral-600 hover:underline"
          >
            Continua lo shopping
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
