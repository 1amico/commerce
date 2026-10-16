// Tracciamento dei rivenditori che portano un ordine.
// Il codice arriva come ?ref= nel link, resta in un cookie per 90 giorni e
// viaggia fino ai metadata della sessione Stripe: la provvigione si calcola
// leggendo gli ordini in dashboard, senza bisogno di un database nostro.

export const AFFILIATE_COOKIE = "cp_ref";
export const AFFILIATE_DAYS = 90;

/** Solo lettere, cifre e trattini: il codice finisce in un cookie e in Stripe. */
export function normaliseRef(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const clean = raw.trim().toUpperCase().slice(0, 24);
  return /^[A-Z0-9-]{3,24}$/.test(clean) ? clean : null;
}
