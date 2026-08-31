import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Ramaruizmkt · Pauta y creativos de Meta Ads para infoproductores de ventas",
  description:
    "Tu research de ángulos, tus creativos y tu pauta en un solo sistema que se encarga de todo. Fee fijo mensual, empezamos por un diagnóstico de cuenta y embudo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
