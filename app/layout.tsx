import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
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
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
