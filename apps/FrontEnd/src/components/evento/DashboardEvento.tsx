import eventos from "core/src/constants/eventos";
import InformacoesEvento from "./informaçõesEvento";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import { Convidado, Evento } from "core/src/index";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
  atualizarLista: () => void;
}

function DashboardEvento({
  evento,
  presentes,
  ausentes,
  atualizarLista,
  totalGeral,
}: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <InformacoesEvento esconderNome={false} evento={evento} className="flex-1" />
        <AcessarViaQrCode evento={evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica
          text="Espectatica de convidados"
          valor={evento.publicoEsperado}
          imagem="/icones/convidados.svg"
        />
        <Estatistica
          text="Confirmações"
          valor={presentes.length}
          imagem="/icones/confirmados.svg"
        />
        <Estatistica
          text="Total"
          valor={totalGeral}
          imagem="/icones/acompanhantes.svg"
        />
      </div>
      <button className="botão azul self-end mt-12" onClick={atualizarLista}>
        <span>Atualizar lista de Convidados</span>
      </button>
      <div>
        <span className="flex py-2 text-xl font-bold text-white/80">
          Convidados que confirmaram PRESENÇA
        </span>
        <ListaConvidados convidados={presentes} />
      </div>
      <div>
        <span className="flex py-2 text-xl font-bold text-white/80">
          Convidados que confirmaram AUSÊSNCIA
        </span>
        <ListaConvidados convidados={ausentes} />
      </div>
    </div>
  );
}

export default DashboardEvento;
