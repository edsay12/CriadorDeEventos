import { Convidado } from "core/src/index";

export interface ConvidadoItemProps {
  convidado: Convidado;
}

function ConvidadoItem({ convidado }: ConvidadoItemProps) {
  return (
    <li className="flex justify-between bg-black/40 rounded-md px-6 border border-zinc-800 py-3">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{convidado.nome}</span>
        <span className="text-sm text-zinc-400">{convidado.email}</span>
      </div>
      <div className="flex flex-col items-end ">
        <span className="text-sm text-zinc-400">Acompanhantes: </span>
        <span className="text-xl font-bold">{convidado.qtdeAcompanhantes}</span>
      </div>
    </li>
  );
}

export default ConvidadoItem;
