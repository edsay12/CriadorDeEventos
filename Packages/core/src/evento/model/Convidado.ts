export default interface Convidado {
  id: string;
  nome: string;
  email: string;
  confirmado: boolean;
  possuiAcompanhante: boolean;
  qtdeAcompanhantes: number;
}
