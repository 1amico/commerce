import { GeistSans } from "geist/font/sans";
import { ReactNode } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { Navbar } from "components/layout/navbar";
import { baseUrl } from "lib/utils";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ca' Paradiso Cagli",
    template: "%s | Ca' Paradiso Cagli",
  },
  description:
    "Uova naturali, miele artigianale e ospitalità nel cuore delle Marche.",
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className={GeistSans.variable}>
      <body className="bg-neutral-50 text-black selection:bg-amber-300">
        <Navbar />
        <main>
          {children}
          <Toaster closeButton />
        </main>
      </body>
    </html>
  );
}
