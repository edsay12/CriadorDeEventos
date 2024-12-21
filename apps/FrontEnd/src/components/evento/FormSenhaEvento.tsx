import Input from "./Input";

export interface FormSenhaEventoProps {
  senha?: string;
  setSenha: (senha: string) => void;
  acessarEvento: () => void;
}
function FormSenhaEvento({
  setSenha,
  acessarEvento,
  senha,
}: FormSenhaEventoProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-96 mx-auto bg-zinc-900 rounded-lg p-8">
      <h1 className="text-lg font-semibold">Bem vindo ao criador de eventos</h1>
      <h2 className="">Administrador</h2>
      <p className="text-sm text-zinc-500">Insira a senha para gerenciar o evento</p>
      <Input
        value={senha}
        type="Password"
        onChange={(e) => setSenha(e.target.value)}
      ></Input>
      <button className="botão azul" onClick={acessarEvento}>acessar</button>
    </div>
  );
}

export default FormSenhaEvento;
