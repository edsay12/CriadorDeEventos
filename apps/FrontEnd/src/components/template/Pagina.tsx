export interface PaginaProps {
  children: React.ReactNode;
  className: string;
}

export default function Pagina({ children, className }: PaginaProps) {
  <div>
    <main className={className}>{children}</main>
  </div>;
}
