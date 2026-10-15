"use client";

import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "lib/i18n";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export function CartView({ t, locale }: { t: Dictionary; locale: Locale }) {
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
        body: JSON.stringify({ items, locale }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
        return;
      }
      alert(data.error || t.checkoutError);
    } catch {
      alert(t.checkoutError);
    }
    setBusy(false);
  };

  if (!loaded) {
    return <div className="mx-auto max-w-4xl px-4 py-16">{t.loading}</div>;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold">{t.cart}</h1>
        <p className="text-xl text-neutral-600">{t.emptyCart}</p>
        <a
          href="/shop"
          className="mt-8 inline-block rounded bg-black px-6 py-3 text-white hover:bg-neutral-800"
        >
          {t.goToShop}
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">{t.cart}</h1>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex items-center justify-between border-b border-neutral-200 pb-4"
          >
            <div>
              <h2 className="font-bold">{item.name}</h2>
              <p className="text-sm text-neutral-600">
                {t.quantity}: {item.quantity}
              </p>
              <button
                onClick={() => removeItem(idx)}
                className="mt-1 text-sm text-red-600 hover:underline"
              >
                {t.remove}
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
          <span>{t.total}</span>
          <span>€{total.toFixed(2)}</span>
        </div>

        <button
          onClick={checkout}
          disabled={busy}
          className="w-full rounded bg-green-700 px-6 py-4 text-lg font-bold text-white hover:bg-green-800 disabled:opacity-50"
        >
          {busy ? t.working : t.checkout}
        </button>

        <a
          href="/shop"
          className="block text-center text-neutral-600 hover:underline"
        >
          {t.keepShopping}
        </a>
      </div>
    </div>
  );
}
