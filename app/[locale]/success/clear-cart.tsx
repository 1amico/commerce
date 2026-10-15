"use client";

import { useEffect } from "react";

export function ClearCart() {
  useEffect(() => {
    try {
      localStorage.removeItem("cart");
    } catch {}
  }, []);

  return null;
}
