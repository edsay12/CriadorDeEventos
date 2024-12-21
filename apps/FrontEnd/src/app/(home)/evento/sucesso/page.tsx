"use client";

import AcessarViaQrCode from "@/components/evento/AcessarViaQrCode";
import InformacoesEvento from "@/components/evento/informaçõesEvento";
import Copiar from "@/components/shared/Copiar";
import Janela from "@/components/shared/Janela";
import useEvento from "@/data/hooks/useEvento";
import { Evento } from "core/src";
import { useEffect, useState } from "react";
import { FaKey } from "react-icons/fa6";
import QRCode from "react-qr-code";

function Sucesso() {
  const { evento } = useEvento();
  const [urlAtual, setUrlAtual] = useState("");
  useEffect(() => {
    setUrlAtual(window.location.origin);
  }, []);
  console.log(evento.data);
  return evento ? (
    <Janela
      label="Evento"
      titulo={evento.nome!}
      imagem={evento.imagem}
      background={evento.imagemBackground}
    >
      <InformacoesEvento
        esconderNome={true}
        evento={evento as Evento}
      ></InformacoesEvento>
      <div className="flex gap-5 items-center mt-4">
        <div className="flex flex-1 flex-col gap-5">
          <Copiar label="Link do convite" texto={`${urlAtual}/convite/${evento.alias}`} />
          <Copiar
            label="Link administrador"
            texto={`${urlAtual}/evento/admin/${evento.id}`}
          />
          <Copiar
            label="senha"
            icone={FaKey}
            texto={evento.senha!}
            observacoes="essa senha não sera exibida novamente entçao guarde com cuidado"
          />
        </div>
        <AcessarViaQrCode evento={evento as Evento} />
      </div>
    </Janela>
  ) : null;
}

export default Sucesso;
