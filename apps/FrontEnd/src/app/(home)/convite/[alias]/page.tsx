function PaginaDeConvite({ params }: { params: { alias: string } }) {
  return (
    <div>
      <span>{params.alias}</span>
    </div>
  );
}

export default PaginaDeConvite;
