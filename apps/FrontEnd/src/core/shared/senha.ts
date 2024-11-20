import { randomUUID } from "crypto";

export default class Senha {
    static nova(tamanho:number = 15):string{
        const minusculas = "abcdefghijklmnopqrstuvwxyz"
        const maiusculas = minusculas.toUpperCase()
        const numeros = "123456789"
        const especiais =  "!@#$%¨&*()_+"
        const grupos = [minusculas,maiusculas,numeros,especiais]

        const senha = []

        for (let index = 0; index < tamanho; index++) {
            const grupo = grupos[Math.floor(Math.random() * grupos.length)]
            senha.push(grupo[Math.floor(Math.random() * grupo.length)])
            
        }

        return senha.join("")

    }
}
