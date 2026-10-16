"use client";

import Image from "next/image";
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
  const isBottle = ["wine", "sparkling", "oil"].includes(product.category);
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
          (1000 * 60 * 60 * 24),
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
      (i) => i.id === product.id && i.checkIn === checkIn,
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
  const quoteHref = `mailto:info@caparadiso.com?subject=${encodeURIComponent(product.name)}`;
  const dateField =
    "mt-1 w-full rounded-sm border border-line bg-cream px-3 py-2 text-ink";

  return (
    <article className="group/card flex flex-col overflow-hidden border border-line bg-white transition-shadow hover:shadow-[0_8px_30px_rgba(42,37,32,0.08)]">
      {product.image && (
        <div className="relative mb-6 h-56 overflow-hidden bg-cream-deep">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className={
              isBottle
                ? "object-contain p-3 mix-blend-multiply"
                : "object-cover transition-transform duration-700 group-hover/card:scale-105"
            }
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 pt-6">
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
            {product.quoteOnly ? (
              <span className="font-sans text-sm tracking-wide text-ink-soft">
                {t.priceOnRequest}
              </span>
            ) : (
              <>
                €{product.price.toFixed(2)}
                {isRoom && (
                  <span className="ml-1 font-sans text-xs tracking-wide text-ink-soft">
                    {t.perNight}
                  </span>
                )}
              </>
            )}
          </span>
          {product.quoteOnly ? (
            <a
              href={quoteHref}
              className="rounded-sm border border-ink px-5 py-2.5 text-sm tracking-wide text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {t.requestQuote}
            </a>
          ) : (
            <button
              onClick={addToCart}
              disabled={product.soldOut}
              className="rounded-sm bg-ink px-5 py-2.5 text-sm tracking-wide text-cream transition-colors hover:bg-olive disabled:cursor-not-allowed disabled:bg-line disabled:text-ink-soft"
            >
              {product.soldOut ? t.soldOut : isRoom ? t.book : t.add}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
