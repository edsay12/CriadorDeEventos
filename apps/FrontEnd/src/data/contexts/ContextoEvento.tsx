"use client";

import { Convidado } from "@prisma/client";
import { Evento } from "core/src";
import { createContext } from "react";
import useAPI from "../hooks/useApi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface ContextoEventoProps {
  children: React.ReactNode;
  evento?: Partial<Evento>;
  convidado: Partial<Convidado>;
  aliasValido: boolean;
  alterarEvento: (evento: Partial<Evento>) => void;
  alterarConvidado: (convidado: Partial<Convidado>) => void;
  carregarEvento: (idOrAlias: number) => Promise<void>;
  salvarEvento: () => void;
  adicionarConvidado: () => void;
}


const ContextoEvento = createContext<ContextoEventoProps>({} as ContextoEventoProps);

function ContextoEventoProvider({ children }: { children: React.ReactNode }) {
  const [aliasValido, setAliasValido] = useState(false);
  const [evento, setEvento] = useState<Partial<Evento>>({});
  const [convidado, setConvidado] = useState<Partial<Convidado>>({});
  const router = useRouter();
  const { httpGet, httpPost } = useAPI();

  async function salvarEvento() {
    try {
      const eventoCriado = await httpPost("/eventos", evento);
      router.push(`/evento/sucesso`);
      
      setEvento(eventoCriado);
    } catch (erro) {
      // TODO: tratar erro
      console.log(erro);
    }
  }

  async function carregarEvento(idOrAlias: number) {
    try{
       const evento = await httpGet(`/eventos/${idOrAlias}`);
       setEvento(evento);
     

    }catch(erro){
      // TODO: tratar erro
      console.log(erro);
    }
  }

  async function adicionarConvidado() {
    try {
      await httpPost(`/eventos/${evento.id}/convidados`, convidado);
      router.push(`/convite/obrigado`);
      setConvidado(convidado);
    } catch (erro) {
      // TODO: tratar erro
      console.log(erro);
    }
  }
  const validarAlias = async () => {
    try {
      const data= await httpGet(`/eventos/validar/${evento.alias}`);
      console.log(data);
      setAliasValido(data);
    } catch (erro) {
      // TODO: tratar erro
      console.log(erro);
    }
  };

  useEffect(() => {
    if(evento.alias) validarAlias();
  }, [evento.alias,validarAlias]);

  return (
    <ContextoEvento.Provider
      value={{
        evento,
        convidado,
        aliasValido,
        alterarEvento: setEvento,
        alterarConvidado: setConvidado,
        salvarEvento,
        carregarEvento,
        adicionarConvidado,
        children,

      }}
    >
      {children}
    </ContextoEvento.Provider>
  );
}

export { ContextoEventoProvider, ContextoEvento };
