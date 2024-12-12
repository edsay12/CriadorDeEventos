export interface InformacaoProps {
  label: string;
  children: React.ReactNode;
}

export default function Informacao({ children, label }: InformacaoProps) {
  return (
    <div className="flex-1 flex flex-col gap-2 items-start border border-zinc-800 px-6 py-3 rounded-lg">
      <span className="text-zinc-400 font-bold">{label}</span>
      <div className="text-xl">{children}</div>
    </div>
  );
}
