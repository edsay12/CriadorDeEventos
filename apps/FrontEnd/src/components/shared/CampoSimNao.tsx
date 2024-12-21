export interface CampoSimNaoProps {
  label: string;
  value: boolean;
  onChange: (valor: boolean) => void;
  className?: string;
}

function CompoSimNao({ label, onChange, value, className }: CampoSimNaoProps) {
  function renderItem(valor: boolean) {
    return (
      <span
        className={`
            flex-1 flex items-center justify-center rounded-md cursor-pointer p-2 text-sm font-medium text-white ${
              value === valor
                ? "bg-black font-bold text-white"
                : "text-zinc-400"
            } ${className ?? ""}
        
        `}
        onClick={() => onChange(valor)}
      >
        {valor ? "Sim" : "Não"}
      </span>
    );
  }

  return (
    <div className="flex flex-col gap-2">
    {label && <label className="text-lg font-balck">{label}</label>}
    <div className="w-56 flex justify-start h-10 rounded-md bg-zinc-900 p-1">
        {renderItem(true)}
        {renderItem(false)}
    </div>
    </div>
  ); 
}

export default CompoSimNao;
