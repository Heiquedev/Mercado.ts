import { Produto } from "./Produto";

export class Eletronico implements Produto {

    nome: string
    preco: number
    marca: string

    constructor( nome: string, preco: number, marca: string,) {
        this.nome = nome
        this.preco = preco
        this.marca = marca
    }

    getDescriçao(): string {
        return `\nLivro: ${this.nome} \nmarca: ${this.marca} \nPreço: R$${this.preco.toFixed(2)} `
    }
}