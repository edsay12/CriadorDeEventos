import Convidado from "./Convidado";

export default interface Evento {
  id: string;
  alias: string; // nome unico para identificar o evento
  senha: string;
  nome: string;
  descricao:string;
  data: Date;
  local: string;
  imagem: string;
  imagemBackground: string;
  publicoEsperado: number;
  convidados: Convidado[];
}
