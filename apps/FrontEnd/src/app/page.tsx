import Logo from "@/components/template/Logo";
import LogoGrande from "@/components/template/LogoGrande";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-[url('/background-elementos.svg')] bg-cover bg-center">
      <div className="flex flex-col items-center justify-center w-full max-w-lg text-center gap-10">
        <LogoGrande />
        <p className="text-zinc-500 text-md text-center w-96 leading-6 font-bold select-none">
          Crie e gerencie o convite de seu evento de forma simples e
          descomplicada.
        </p>
        <Link href={"/evento"} className="botão azul uppercase"> Crie seu evento </Link>
      </div>
    </div>
  );
}
