import { Evento } from "core/src/index";
import Informacao from "../shared/informação";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}

function InformacoesEvento({ evento, className }: InformacoesEventoProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex-1 flex items-center gap-4 border border-zinc-800 px-6 py-3 ">
        <span className="text-2xl font-black">{evento.alias}:</span>
        <span className="text-xl text-zinc-300">{evento.nome}</span>
      </div>
      <div className="flex gap-2">
        <Informacao label="Data:">
          <span>{new Date(evento.data!).toLocaleDateString()}</span>
          {" as "}
          <span>{new Date(evento.data!).toLocaleTimeString()}</span>
        </Informacao>
        <Informacao label="Local:">
          <span>{evento.local}</span>
        </Informacao>
      </div>

      <div className="">
        <Informacao label="Descrição:">
          <span>{evento.descricao}</span>
        </Informacao>
      </div>

    </div>
  );
}

export default InformacoesEvento;
