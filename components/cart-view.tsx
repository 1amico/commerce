"use client";

import { useEffect, useState } from "react";
import { AFFILIATE_COOKIE } from "lib/affiliate";
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

  const readRef = () =>
    document.cookie
      .split("; ")
      .find((c) => c.startsWith(`${AFFILIATE_COOKIE}=`))
      ?.split("=")[1] ?? null;

  const checkout = async () => {
    setBusy(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, locale, ref: readRef() }),
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
    return <div className="mx-auto max-w-3xl px-6 py-20">{t.loading}</div>;
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="mb-4 text-5xl tracking-tight">{t.cart}</h1>
        <p className="text-lg text-ink-soft">{t.emptyCart}</p>
        <a
          href="/shop"
          className="mt-10 inline-block border border-ink px-8 py-3 text-sm uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-cream"
        >
          {t.goToShop}
        </a>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-10 text-5xl tracking-tight">{t.cart}</h1>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex items-start justify-between border-b border-line py-5"
          >
            <div>
              <h2 className="text-lg">{item.name}</h2>
              <p className="mt-1 text-sm text-ink-soft">
                {t.quantity}: {item.quantity}
              </p>
              <button
                onClick={() => removeItem(idx)}
                className="mt-2 text-xs uppercase tracking-wide text-ink-soft hover:text-ochre"
              >
                {t.remove}
              </button>
            </div>
            <span className="font-display text-xl">
              €{(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-5 border-t border-line pt-8">
        <div className="flex items-center justify-between font-display text-3xl">
          <span>{t.total}</span>
          <span>€{total.toFixed(2)}</span>
        </div>

        <button
          onClick={checkout}
          disabled={busy}
          className="w-full rounded-sm bg-olive px-6 py-4 text-sm uppercase tracking-[0.15em] text-cream transition-colors hover:bg-olive-deep disabled:opacity-50"
        >
          {busy ? t.working : t.checkout}
        </button>

        <a
          href="/shop"
          className="block text-center text-sm text-ink-soft hover:text-ink"
        >
          {t.keepShopping}
        </a>
      </div>
    </div>
  );
}
