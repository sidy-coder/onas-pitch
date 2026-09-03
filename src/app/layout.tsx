import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Les deux polices de la charte ONAS.
 * — Jost couvre `font-body` et `font-condensed`
 * — DIN Condensed Bold couvre `font-title` (fichier local, non distribué par Google)
 * La correspondance nom-de-classe → variable est faite dans `globals.css`, bloc `@theme`.
 */
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dinCondensed = localFont({
  src: [
    { path: "./fonts/din-condensed-bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/din-condensed-bold.woff",  weight: "700", style: "normal" },
  ],
  variable: "--font-din-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Présentation — Refonte ONAS.SN",
  description:
    "Présentation interactive de la refonte du site de l'Office National de l'Assainissement du Sénégal.",
  icons: { icon: "/Icone-site-web-onas.png" },
  // Document de travail : il n'a rien à faire dans un index de moteur de recherche.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${jost.variable} ${dinCondensed.variable}`}>
      <body>{children}</body>
    </html>
  );
}
