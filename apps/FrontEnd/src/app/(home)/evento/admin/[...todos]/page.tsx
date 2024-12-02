function PaginaAdmin({ params }: { params: { todos: [string, string] } }) {
  return (
    <div>
      <span>Login: {params.todos[0]}</span>
      <span>senha: {params.todos[1]}</span>
    </div>
  );
}

export default PaginaAdmin;
