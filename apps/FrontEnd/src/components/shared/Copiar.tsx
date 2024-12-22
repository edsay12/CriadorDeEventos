import { FaLink, FaRegCopy } from "react-icons/fa6";
import { IconType } from 'react-icons';
import useMessage from "@/data/hooks/userMessagens";
export interface CopiarProps {
  label: string;
  texto: string;
  observacoes?: string;
  icone?: IconType;
}

function Copiar({ label, texto, icone:Icone = FaLink , observacoes }: CopiarProps) {
  const { adicionarMensagemSuccess,adicionarMensagemError } = useMessage();
  function copiar() {
    navigator.clipboard.writeText(texto);
    adicionarMensagemSuccess("Copiado para a área de transferência");
  }

  return (
    <div className="flex flex-col gap-2">
      <span>{label}</span>
      <div className="flex items-center gap-2 bg-black border px-4 py-2 text-zinc-500 border-zinc-800 rounded-md" >
        {<Icone />}
        <span className="flex-1">{texto}</span>
        <FaRegCopy className="cursor-pointer" onClick={copiar} />
      </div>
      {observacoes ? (
        <span className="text-zinc-500 text-xs text-yellow-300/80">{observacoes}</span>
      ) : null}
    </div>
  );
}

export default Copiar;
