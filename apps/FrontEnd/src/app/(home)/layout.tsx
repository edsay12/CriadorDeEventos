import Pagina from "@/components/template/Pagina";
import { Metadata } from "next";

export const metadata: Metadata= {
  title: "Criar um novo evento",
  description: "Crie eventos e convide seus amigos",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Pagina>{children}</Pagina>;
}
