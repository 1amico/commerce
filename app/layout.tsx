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
  const fromMiddleware = (await headers()).get("x-locale") ?? "";
  const locale = isLocale(fromMiddleware) ? fromMiddleware : defaultLocale;
  const t = getDictionary(locale);

  return (
    <html
      lang={locale}
      className={`${GeistSans.variable} ${display.variable}`}
    >
      <body className="selection:bg-ochre/25">
        <Navbar t={t} />
        <main>
          {children}
          <Toaster closeButton />
        </main>
      </body>
    </html>
  );
}
