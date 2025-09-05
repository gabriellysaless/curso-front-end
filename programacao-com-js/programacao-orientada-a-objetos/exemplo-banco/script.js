// Definir classe conta bancária

class ContaBancaria {
    // Propriedades
    #saldo; // torna o atributo privado
    constructor() {
        this.#saldo = 0
    }

    //Métodos
    depositar(valor) {
        this.#saldo += valor;
    }

    sacar(valor) {
        this.#saldo -= valor;
    }

    temSaldo(valor) {
        if (valor < 0) return false; // verifica se é negativo
        return valor <= this.#saldo; // compara se valor é menor ou igual ao saldo privado
    }

    get saldo() {
        return this.#saldo // obtém o valor privado
    }
}

class CaixaEletronico {
    constructor(conta) {
        this.conta = conta;
    }

    depositar() {
        // Obter valor
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        if (isNaN(valorDeposito) || valorDeposito <= 0) {
            return this.mostrarMensagem("Informe um valor de depósito válido.");
        }
        //Fazer depósito
        this.conta.depositar(valorDeposito);
        //Exibir saldo
        this.mostrarSaldo(this.conta.saldo);
    }

    sacar() {
        // Obter valor
        const valorSaque = parseFloat(document.getElementById("valorSaque").value);
        if (isNaN(valorSaque) || valorSaque <= 0) {
            return this.mostrarMensagem("Informe um valor de saque válido.");
        }
        //Fazer saque
        if (this.conta.temSaldo(valorSaque)) {
            this.conta.sacar(valorSaque);
            this.mostrarSaldo(this.conta.saldo);
        } else {
            // Mostrar saldo induficiente
            this.mostrarSaldo("Saldo insuficiente!")
        }
    }

    mostrarMensagem(msg) {
        document.getElementById("saldo").textContent = msg;
        document.getElementById("valorDeposito").value = '';
        document.getElementById("valorSaque").value = '';
    }

    mostrarSaldo(saldo) {
        document.getElementById("saldo").textContent = `Saldo: R$ ${saldo}`;
        document.getElementById("valorDeposito").value = ''; // limpa o input
        document.getElementById("valorSaque").value = ''; // limpa o input
    }
}

// Criar instâncias
const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);