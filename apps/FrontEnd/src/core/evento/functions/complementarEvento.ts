import { Id, Senha } from "@/core/shared";
import Evento from "../model/Evento";
import ValidarEvento from "./validarEvento";

export default function complementarEvento(
  eventoParcial: Partial<Evento>
): Evento {
  const erros = ValidarEvento(eventoParcial);

  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha || Senha.nova(15),
    publicoEsperado:eventoParcial.publicoEsperado || 1,
  } as Evento;

  return evento
}
