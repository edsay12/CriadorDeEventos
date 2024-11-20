import Evento from "../model/Evento";

export default function ValidarEvento(evento:Partial<Evento>):string[] {

    const erros = []

    if(!evento.alias){
        erros.push("alias e obrigatório")
    }
    if(!evento.nome){
        erros.push("nome e obrigatório")
    }
    if(!evento.descricao){
        erros.push(".descricao e obrigatório")
    }
    if(!evento.data){
        erros.push(".data e obrigatório")
    }
    if(!evento.local){
        erros.push("lo.local e obrigatório")
    }
    if(!evento.publicoEsperado){
        erros.push("publicoEsperado e obrigatório")
    }
    if(!evento.imagem){
        erros.push("imagem e obrigatório")
    }
    return erros

}