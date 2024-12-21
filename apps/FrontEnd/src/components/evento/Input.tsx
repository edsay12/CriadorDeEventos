export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  description?: string;
  label?: string;
  observacoes?: string;
  erro?: string;
}

export default function Input({ ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        {props.label && <label className="text-lg font-black text-white">{props.label}</label>}
        {props.description && <p className="text-sm font-light text-zinc-400 -mt-1">{props.description}</p>}
      </div>
      <input {...props} className="w-full px-3 py-2 border rounded  bg-black/50 border-white/20 focus:border-white/50" />
      {props.erro && <p className="text-red-500 pl-2 text-xs">{props.erro}</p>}
      {props.observacoes && <p className="text-yellow-300 pl-2 text-xs">{props.observacoes}</p>}
    </div>
  );
}
