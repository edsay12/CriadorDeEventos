import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextoEventoProvider } from "@/data/contexts/ContextoEvento";

export const metadata: Metadata = {
  title: "Seu evento logo aqui",
  description: "Crie eventos e convide seus amigos",
};

const fontInter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fontInter.className}>{children}</body>
    </html>
  );
}
