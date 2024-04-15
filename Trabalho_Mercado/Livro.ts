import { Produto } from "./Produto";

export class Livro implements Produto {

    nome: string
    preco: number
    autor: string

    constructor( nome: string, preco: number, autor: string,) {
        this.nome = nome
        this.preco = preco
        this.autor = autor
    }

    getDescriçao(): string {
        return `\nLivro: ${this.nome} \nAutor: ${this.autor} \nPreço: R$${this.preco.toFixed(2)} `
    }
}