"use client";
import { useState } from "react";

export interface PassosProps {
  labels: string[];
  children: any;
  labelAcao: string;
  acao: () => void; // acão final
  permiteProximoPasso?: boolean[];
}

function Passos({
  labels,
  children,
  acao,
  labelAcao,
  permiteProximoPasso: permitirProximopasso,
}: PassosProps) {
  const [passoAtual, setPassoAtual] = useState(0);

  function semPassoAnterior() {
    return passoAtual === 0;
  }

  function semProximoPasso() {
    return passoAtual === labels.length - 1;
  }

  function passoAnterior() {
    if (semPassoAnterior()) return;
    return setPassoAtual((passoAtual) => passoAtual - 1);
  }
  function proximoPasso() {
    if (semProximoPasso()) return;
    return setPassoAtual((passoAtual) => passoAtual + 1);
  }

  function renderizarLabels() {
    return (
      <div className="flex gap-2 select-none">
        {labels.map((label, index) => {
          const selecionado = passoAtual === index;
          return (
            <div key={index} className="flex items-center gap-2">
              <span
                className={` flex items-center justify-center w-9 h-9 rounded-full ${selecionado ? "bg-white text-black" : "bg-zinc-700"}`}
              >
                {index + 1}
              </span>
              <span
                className={`${selecionado ? "text-white" : "text-zinc-600"}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  const permiteProximoPasso = permitirProximopasso?.[passoAtual] ?? true;
  return (
    <>
      <div className="w-full flex flex-col gap-10 flex-1">
        <div className="self-center">{renderizarLabels()}</div>
        <div>{children[passoAtual]}</div>
        <div className="flex justify-between">
          <button
            className={`
            botão
            ${semPassoAnterior() ? "bg-zinc-300 cursor-not-allowed opacity-50" : "bg-zinc-700 hover:bg-zinc-600 text-white"}
            
            `}
            onClick={passoAnterior}
            disabled={semPassoAnterior()}
          >
            Anterior
          </button>
          {semProximoPasso() ? (
            <button
              disabled={!permiteProximoPasso}
              className={`
          botão bg-green-700 hover:bg-green-600 text-white"
          
          `}
              onClick={acao}
            >
              Salvar evento
            </button>
          ) : (
            <button
              className={`
            botão
            ${semProximoPasso() ? "bg-zinc-300 cursor-not-allowed opacity-50" : "bg-green-700 hover:bg-green-600 text-white"}
            
            `}
              onClick={proximoPasso}
              disabled={!permiteProximoPasso || semProximoPasso()}
            >
              Próximo
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Passos;
