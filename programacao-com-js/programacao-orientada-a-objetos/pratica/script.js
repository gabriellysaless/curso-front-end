/**
 * Pegar o valor
 * definir os tempos 
 * calcular, exibir o tempo e o troco
 *  se menor que 1,00 valor insuficiente
 */
class Parquimetro {

    inserirValor() {
        const valorDepositado = parseFloat(document.getElementById("valor").value);
        
        if(isNaN(valorDepositado) || valorDepositado < 1) {
            return this.mostrarErro("Deposite um valor acima de R$ 1,00!")
        } else if(valorDepositado < 1.75){
            return this.mostrarMensagem("Tempo: 30 minutos", this.calcularTroco(valorDepositado, 1));
        } else if(valorDepositado < 3) {
            return this.mostrarMensagem("Tempo: 60 minutos", this.calcularTroco(valorDepositado, 1.75));
        } else {
            return this.mostrarMensagem("Tempo: 120 minutos", this.calcularTroco(valorDepositado, 3));
        }
    }

    calcularTroco(valor, valorTempo) {
        return (valor - valorTempo).toFixed(2);
    }

    mostrarErro(msg){
        document.getElementById("resultado").textContent = msg;
        document.getElementById("valor").value = '';
        document.getElementById("troco").textContent = '';
    }

    mostrarMensagem(msg, troco){
        document.getElementById("resultado").textContent = msg;
        document.getElementById("valor").value = '';
        document.getElementById("troco").textContent = `Troco: ${troco}`;
    }
    
};

// Criar instancia para usar a classe
const pq = new Parquimetro();