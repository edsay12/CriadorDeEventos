import Convidado from "../model/Convidado";

export default function validarConvidado(
  convidado: Partial<Convidado>
): string[] {
  const erros = [];

  if (!convidado.nome) {
    erros.push("nome e obrigatório");
  }
  if (!convidado.email) {
    erros.push("email e obrigatório");
  }
  if (!convidado.confirmado) {
    erros.push("confirmado e obrigatório");
  }
  if (!convidado.possuiAcompanhantes) {
    erros.push("possuiAcompanhantes e obrigatório");
  }
  if (!convidado.qtdeAcompanhantes) {
    erros.push("qtdeAcompanhantes e obrigatório");
  }

  return erros;
}
