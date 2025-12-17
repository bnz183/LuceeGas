import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Luce & Gas – Consulente Personale | Servizio Tecnocasa",
  description:
    "Servizio dedicato ai clienti Tecnocasa. Risparmio e chiarezza in bolletta, attivazioni senza stress, un referente unico fino alla prima bolletta.",
  keywords: "luce gas, bolletta, risparmio, Tecnocasa, consulente energia",
  openGraph: {
    title: "Luce & Gas – Consulente Personale",
    description:
      "Servizio dedicato ai clienti Tecnocasa. Risparmio e chiarezza in bolletta.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

