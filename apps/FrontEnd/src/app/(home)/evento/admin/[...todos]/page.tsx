"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { Convidado, Evento } from "core/src/index";
import eventos from "core/src/constants/eventos";
import { useEffect, useState } from "react";
import useAPI from "@/data/hooks/useApi";
import {use} from 'react'

function PaginaAdmin({ params }: { params: { todos: [string, string] } }) {
  const paramsAw = use(params)
  const id =  paramsAw.todos[0];
  const [senha, setSenha] = useState<string>(paramsAw.todos[1] ?? "");
  const [evento, setEvento] = useState<Evento | null>(null);
  const { httpPost } = useAPI();
  
  const presentes = evento?.convidados.filter((convidado) => convidado.confirmado) ?? [];
  const ausentes = evento?.convidados.filter((convidado) => !convidado.confirmado) ?? [];

  const totalGeral = presentes.reduce((acc: number, convidado: Convidado) => {
    return acc + convidado.qtdeAcompanhantes + 1;
  }, 0);

  const obterEvento = async () => {
    if (!id || !senha) {
      return;
    }
    const evento = await httpPost("/eventos/acessar", {
      id,
      senha,
    });
    setEvento(evento);
  };


 
  return (
    <div>
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          atualizarLista={obterEvento}
          ausentes={ausentes}
          totalGeral={totalGeral ?? 0}
        />
      ) : (
        <FormSenhaEvento
          setSenha={setSenha}
          senha={senha}
          acessarEvento={obterEvento}
        />
      )}
    </div>
  );
}

export default PaginaAdmin;
