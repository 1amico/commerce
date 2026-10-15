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

  return (
    <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-6">
      {product.image && (
        <div className="mb-4 flex h-48 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-auto object-contain"
          />
        </div>
      )}
      {product.brand && (
        <p className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
          {product.brand}
        </p>
      )}
      <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
      <p className="mb-4 flex-1 text-neutral-600">{product.description}</p>

      {isRoom && (
        <div className="mb-4 grid gap-3 sm:grid-cols-2">
          <label className="text-sm">
            {t.arrival}
            <input
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="mt-1 w-full rounded border border-neutral-300 px-3 py-2"
            />
          </label>
          <label className="text-sm">
            {t.departure}
            <input
              type="date"
              min={checkIn || today}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="mt-1 w-full rounded border border-neutral-300 px-3 py-2"
            />
          </label>
        </div>
      )}

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-green-700">
          €{product.price.toFixed(2)}
          {isRoom && (
            <span className="text-sm font-normal text-neutral-500">
              {" "}
              {t.perNight}
            </span>
          )}
        </span>
        <button
          onClick={addToCart}
          disabled={product.soldOut}
          className="rounded bg-black px-4 py-2 text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          {product.soldOut ? t.soldOut : isRoom ? t.book : t.add}
        </button>
      </div>
    </div>
  );
}
