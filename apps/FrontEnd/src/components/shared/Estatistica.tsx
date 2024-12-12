import Image from "next/image";

export interface EstatisticaProps {
  text: string;
  valor: any;
  imagem: string;
}

function Estatistica({ text, valor, imagem }: EstatisticaProps) {
  return (
    <div className="flex items-center bg-zinc-900 rounded-lg py-2.5 px-6 gap-5">
      <div className="flex-1 flex flex-col">
        <span className="font-light text-zinc-400">{text}: </span>
        <span className="text-2xl font-black">{valor}</span>
      </div>
      <div>
        <Image src={imagem} width={80} height={80} alt="icone" />
      </div>
    </div>
  );
}

export default Estatistica;
