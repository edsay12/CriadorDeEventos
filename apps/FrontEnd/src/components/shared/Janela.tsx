import Image from "next/image";

export interface JanelaProps {
  children: React.ReactNode;
  label: string;
  titulo: string;
  imagem: string | undefined;
  background?: string;
}

export default function Janela({
  children,
  imagem,
  label,
  titulo,
  background,
}: JanelaProps) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-zinc-800">
      <Image
        src={
          background
            ? background
            : "https://th.bing.com/th/id/OIP.uoPbBSz8YFLw52nzSzUwcgHaE7?w=4256&h=2832&rs=1&pid=ImgDetMain"
        }
        alt={"imagem de backgroud"}
        className="-z-30 object-cover"
        fill
        
      />
      <div className="bg-black/80">
        <div className="flex gap-7 p-6 itens-center">
          <div className="w-28 h-28 rounded-full relative">
            <Image
              src={
                imagem
                  ? imagem
                  : "https://th.bing.com/th/id/OIP.uoPbBSz8YFLw52nzSzUwcgHaE7?w=4256&h=2832&rs=1&pid=ImgDetMain"
              }
              alt={"imagem do evento"}
              className="object-cover rounded-full"
              fill
            />
          </div>
          <div className=" flex flex-col justify-center">
            <p className="text-zinc-500 text-sm">{label ?? "Detalhes do evento"}</p>
            <h1 className="text-white text-4xl font-bold">{titulo}</h1>
          </div>
          <div className="flex-1 flex justify-end">
            <Image src="/elementos.png" alt="Elementos decorativos" width={140} height={140}/>
          </div>
        </div>
        <div className="bg-black/70 border-t-4 border-zinc-800 rounded-b-xl p-7">{children}</div>
      </div>
    </div>
  );
}
