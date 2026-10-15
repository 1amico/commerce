"use client";

import { useState } from "react";
import { toast } from "sonner";
import type { Dictionary } from "lib/i18n";
import type { LocalizedProduct } from "lib/products";

export function ProductCard({
  product,
  t,
}: {
  product: LocalizedProduct;
  t: Dictionary;
}) {
  const isRoom = product.category === "accommodation";
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const addToCart = () => {
    if (isRoom && (!checkIn || !checkOut)) {
      toast.error(t.pickDates);
      return;
    }

    let nights = 1;
    if (isRoom) {
      nights = Math.ceil(
        (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
          (1000 * 60 * 60 * 24)
      );
      if (nights < 1) {
        toast.error(t.badDates);
        return;
      }
    }

    let cart: any[] = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch {
      cart = [];
    }

    const existing = cart.find(
      (i) => i.id === product.id && i.checkIn === checkIn
    );

    if (existing && !isRoom) {
      existing.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: isRoom
          ? `${product.name} (${checkIn} → ${checkOut}, ${nights} ${t.nights})`
          : product.name,
        price: product.price,
        quantity: nights,
        checkIn,
        checkOut,
      });
    }

    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
    toast.success(`${product.name} — ${t.addedToCart}`);
  };

  const today = new Date().toISOString().split("T")[0];
  const dateField =
    "mt-1 w-full rounded-sm border border-line bg-cream px-3 py-2 text-ink";

  return (
    <article className="flex flex-col border border-line bg-white p-7 transition-colors hover:border-ink-soft/40">
      {product.image && (
        <div className="mb-6 flex h-56 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-auto object-contain mix-blend-multiply"
          />
        </div>
      )}

      {product.brand && (
        <p className="mb-2 text-xs uppercase tracking-[0.18em] text-ochre">
          {product.brand}
        </p>
      )}

      <h3 className="mb-2 text-2xl leading-snug">{product.name}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-ink-soft">
        {product.description}
      </p>

      {isRoom && (
        <div className="mb-6 grid gap-3 sm:grid-cols-2">
          <label className="text-xs uppercase tracking-wide text-ink-soft">
            {t.arrival}
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className={dateField}
            />
          </label>
          <label className="text-xs uppercase tracking-wide text-ink-soft">
            {t.departure}
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className={dateField}
            />
          </label>
        </div>
      )}

      <div className="flex items-end justify-between border-t border-line pt-5">
        <span className="font-display text-2xl text-ink">
          €{product.price.toFixed(2)}
          {isRoom && (
            <span className="ml-1 font-sans text-xs tracking-wide text-ink-soft">
              {t.perNight}
            </span>
          )}
        </span>
        <button
          onClick={addToCart}
          disabled={product.soldOut}
          className="rounded-sm bg-ink px-5 py-2.5 text-sm tracking-wide text-cream transition-colors hover:bg-olive disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-soft"
        >
          {product.soldOut ? t.soldOut : isRoom ? t.book : t.add}
        </button>
      </div>
    </article>
  );
}
