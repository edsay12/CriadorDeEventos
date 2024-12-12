"use client";
import DashboardEvento from "@/components/evento/DashboardEvento";
import FormSenhaEvento from "@/components/evento/FormSenhaEvento";
import { Convidado, Evento } from "core/src/index";
import eventos from "core/src/constants/eventos";
import { useEffect, useState } from "react";

function PaginaAdmin({ params }: { params: { todos: [string, string] } }) {
  const [senha, setSenha] = useState<string | null>(params.todos[1]);
  const [evento, setEvento] = useState<Evento | null>(null);

  console.log(evento?.convidados);
  const presentes =
    evento?.convidados.filter((convidado) => convidado.confirmado) ?? [];
  const ausentes =
    evento?.convidados.filter((convidado) => !convidado.confirmado) ?? [];

  const totalGeral = presentes.reduce((acc: number, convidado: Convidado) => {
    return acc + convidado.qtdeAcompanhantes + 1;
  }, 0);

  function carregarEvento() {
    const evento = eventos.find((evento) => evento.id === "xswelslsllslsslls");

    setEvento(evento ?? null);
  }
  useEffect(() => {
    carregarEvento();
  }, [params]);

  if (!evento) {
    return <div>Evento não encontrado</div>;
  }

  return (
    <div>
      {evento ? (
        <DashboardEvento
          evento={evento}
          presentes={presentes}
          ausentes={ausentes}
          totalGeral={totalGeral ?? 0}
        />
      ) : (
        <FormSenhaEvento setSenha={setSenha}/>
      )}
    </div>
  );
}

export default PaginaAdmin;
