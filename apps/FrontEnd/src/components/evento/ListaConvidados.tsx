import { Convidado } from "core/src/index";
import ConvidadoItem from "./ConvidadoItem";

export interface ListaConvidadosProps { 
    convidados: Convidado[];
}   


function ListaConvidados({ convidados }: ListaConvidadosProps) {
    return (
        <ul className="flex flex-col gap-2">
            {convidados.map((convidado) => (
                <ConvidadoItem convidado={convidado} />
            ))}
        </ul>
    )
}

export default ListaConvidados;