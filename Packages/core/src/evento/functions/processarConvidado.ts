import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function processarConvidade(
  convidado: Partial<Convidado>
): Convidado {
  const erros = validarConvidado(convidado);
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }
  const quantidadeAcompanhas = convidado.qtdeAcompanhantes ?? 0;
  const temAcompanhantes =
    convidado.possuiAcompanhantes &&
    quantidadeAcompanhas > 0 &&
    convidado.confirmado;

  const convidadoAtualizado: Convidado = {
    ...convidado,
    qtdeAcompanhantes: temAcompanhantes ? quantidadeAcompanhas : 0,
    possuiAcompanhantes: temAcompanhantes,
  } as Convidado;

  return convidadoAtualizado as Convidado;
}
