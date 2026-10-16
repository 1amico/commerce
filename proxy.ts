import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, localeByHost } from "lib/i18n";

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};

// Il layout ha bisogno della lingua già risolta: l'host da solo non basta,
// perché un percorso /de su qualunque dominio deve restare in tedesco.
const LOCALE_HEADER = "x-locale";
const PATH_HEADER = "x-pathname";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const fromPath = pathname.split("/")[1];
  if (fromPath && isLocale(fromPath)) {
    const headers = new Headers(request.headers);
    headers.set(LOCALE_HEADER, fromPath);
    headers.set(PATH_HEADER, pathname);
    return NextResponse.next({ request: { headers } });
  }

  const subdomain = request.headers.get("host")?.split(":")[0]?.split(".")[0];
  const locale = (subdomain && localeByHost[subdomain]) || defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER, locale);
  headers.set(PATH_HEADER, url.pathname);
  return NextResponse.rewrite(url, { request: { headers } });
}
