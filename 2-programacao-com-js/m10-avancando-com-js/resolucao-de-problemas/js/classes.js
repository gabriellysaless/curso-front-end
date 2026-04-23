export class Categoria {
    // Encapsulamento com campos privados
    #nome;
    #valor;
    constructor(nome){
        this.#nome = nome;
        this.#valor = 0;
    }
    // Uso de Getters para campos privados
    get valor() {
        return this.#valor;
    }
    get nome() {
        return this.#nome;
    }
    // Manipulando estado
    adicionarValor(valor){
        this.#valor += parseFloat(valor);
    }
}

export class ListaGastosPorCategoria {
    #categorias;
    // Rest Operator
    constructor(...categorias) {
        this.#categorias = categorias;
    }
    obterCategoriaPorNome(nome) {
        return this.#categorias.find(
          (categoria) => categoria.nome.toLowerCase() === nome.toLowerCase()
        );
      }
    obterTotal() {
        // Redução de dados com reduce
        return this.#categorias.reduce((total, categoria) => total + categoria.valor, 0);
    }

    get categorias() {
        // Retorna nome e valor num formato fácil para o forEach no utils.js
        return this.#categorias.map((c) => [c.nome, c.valor]); // pega cada categoria e tranforma em um array: [["alimentacao", 0], ["transporte", 0] ...]
    }
}