"use client";

import { useEffect } from "react";
import { AFFILIATE_COOKIE, AFFILIATE_DAYS, normaliseRef } from "lib/affiliate";

/** Memorizza il codice rivenditore quando qualcuno arriva da un suo link. */
export function AffiliateCapture() {
  useEffect(() => {
    const ref = normaliseRef(
      new URLSearchParams(window.location.search).get("ref"),
    );
    if (!ref) return;
    const maxAge = AFFILIATE_DAYS * 24 * 60 * 60;
    document.cookie = `${AFFILIATE_COOKIE}=${ref}; path=/; max-age=${maxAge}; samesite=lax`;
  }, []);

  return null;
}
