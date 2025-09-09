// Objeto Literal
const pessoa = { nome: "Carlos", idade: 20 };

// Criar uma Classe
class Veiculo {
    #ligado;

    // Método Construtor
    constructor(marca, modelo, ano) {
        // Atributos
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        // Atributo privado #
        this.#ligado = false;
    }

    // Métodos
    ligar() {
        if (this.#ligado) {
            console.log("O veículo já está ligado!");
            return;
        }
        this.#ligado = true;
        console.log("O veículo foi ligado.");
    }

    desligar() {
        if (!this.#ligado) {
            console.log("O veículo já está desligado!");
            return;
        }
        this.#ligado = false;
        console.log("O veículo foi desligado.");
    }
    
    // Método getter para obter valor do atributo privado (ligado)
    get ligado() {
        return this.#ligado;
    }
}

// Classes com Herança
class Moto extends Veiculo {
    constructor(marca, modelo, ano) {
        super(marca, modelo, ano);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, numeroPortas) {
        super(marca, modelo, ano);
        this.numeroPortas = numeroPortas;
    }

    abrirPortas() {
        console.log("As portas do carro foram abertas.");
    }
}

// Instâncias
const carro = new Carro("Honda", "Civic", 2025, 4);
const moto = new Moto("Yamaha", "MT-07", 2025);

carro.ligar();
carro.ligar();
carro.desligar();
carro.abrirPortas();

console.log("O carro está ligado?", carro.ligado); // Sem o método getter o resultado seria 'undefined'
