import Pagina from "@/components/template/Pagina";
import { ContextoEventoProvider } from "@/data/contexts/ContextoEvento";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar um novo evento",
  description: "Crie eventos e convide seus amigos",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ContextoEventoProvider >
      <Pagina>{children}</Pagina>;
    </ContextoEventoProvider>
  );
}
