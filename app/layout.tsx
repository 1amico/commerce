import { GeistSans } from "geist/font/sans";
import { EB_Garamond } from "next/font/google";
import { headers } from "next/headers";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { Navbar } from "components/layout/navbar";
import { defaultLocale, getDictionary, isLocale } from "lib/i18n";
import { baseUrl } from "lib/utils";

const display = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ca' Paradiso Cagli",
    template: "%s | Ca' Paradiso Cagli",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const head = await headers();
  const fromMiddleware = head.get("x-locale") ?? "";
  // La sezione EV ha una sua intestazione: parla a installatori, non a chi compra uova.
  const isEv = (head.get("x-pathname") ?? "").includes("/ev");
  const locale = isLocale(fromMiddleware) ? fromMiddleware : defaultLocale;
  const t = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${display.variable}`}
    >
      <body className="selection:bg-ochre/25">
        {!isEv && <Navbar t={t} />}
        <main>
          {children}
          <Toaster closeButton />
        </main>
      </body>
    </html>
  );
}
