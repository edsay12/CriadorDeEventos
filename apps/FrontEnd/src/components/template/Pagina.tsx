import Logo from "./Logo";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina({ children, className }: PaginaProps) {
  return (
    <div className="flex flex-col items-center min-h-screen py-10 bg-[url('/background.png')] bg-center bg-cover">
      <Logo />
      <main
        className={` flex-1 flex flex-col justify-center py-10 ${className} container`}
      >
        {children}
      </main>
    </div>
  );
}
