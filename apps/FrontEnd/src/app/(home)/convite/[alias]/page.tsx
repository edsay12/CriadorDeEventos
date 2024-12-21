"use client";

import FormConvidado from "@/components/evento/FormConvidado";
import InformacoesEvento from "@/components/evento/informaçõesEvento";
import Janela from "@/components/shared/Janela";
import Loading from "@/components/shared/Loading";
import useEvento from "@/data/hooks/useEvento";
import { Evento } from "core/src";
import { useEffect, use } from "react";

function PaginaDeConvite({ params }: { params: { alias: string } }) {
  const parametro = use(params);
  const {
    evento,
    carregarEvento,
    convidado,
    alterarConvidado,
    adicionarConvidado,
  } = useEvento();

  useEffect(() => {
    carregarEvento(parametro.alias);
    console.log(evento);
  }, [parametro.alias]);
  return (
    <div>
      {evento.alias ? (
        <Janela
          label="Você foi convidado para participar do evento:"
          titulo={evento.nome!}
          imagem={evento.imagem}
          background={evento.imagemBackground}
        >
          <InformacoesEvento evento={evento as Evento} esconderNome={false} />
          <div className="flex flex-col gap-4 pt-10">
            <span className="text-xl font-bold">Insira seus dados</span>
            <hr className="border-zinc-800 w-full" />
            <FormConvidado
              convidado={convidado}
              convidadoMudou={alterarConvidado}
            />

            <button
              className={`botão ${convidado.confirmado ? "verde" : "vermelho"} self-center`}
              onClick={adicionarConvidado}
            >
              Confirmar {convidado.confirmado ? "Presença" : "Ausência"}
            </button>
          </div>
        </Janela>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PaginaDeConvite;
