import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContextoEventoProvider } from "@/data/contexts/ContextoEvento";
import { ContextMessageProvider } from "@/data/contexts/ContextoMensagem";
import { ToastContainer } from "react-toastify";

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
      <ContextMessageProvider>
        <ContextoEventoProvider>
          <body className={fontInter.className}>{children}</body>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </ContextoEventoProvider>
      </ContextMessageProvider>
    </html>
  );
}
