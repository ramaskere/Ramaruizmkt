import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramaruizmkt — Meta Ads para infoproductores y coaches",
  description:
    "Gestión completa de Meta Ads con fee fijo mensual. Cupo limitado a 2-3 clientes. Vos te olvidás del Ads Manager, yo me encargo de todo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
