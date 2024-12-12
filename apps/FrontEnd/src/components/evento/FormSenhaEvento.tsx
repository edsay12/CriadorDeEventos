type FormEvento = {
  senha: string;
};

function FormSenhaEvento({
  setSenha,
}: {
  setSenha: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <form action="">
      <input type="text" placeholder="senha" />
    </form>
  );
}

export default FormSenhaEvento;
