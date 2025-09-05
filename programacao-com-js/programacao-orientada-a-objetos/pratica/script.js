/**
 * Pegar o valor
 * definir os tempos 
 * calcular, exibir o tempo e o troco
 *  se menor que 1,00 valor insuficiente
 */
class Parquimetro {

    inserirValor() {
        const valorDepositado = parseFloat(document.getElementById("valor").value);
        
        if (isNaN(valorDepositado) || valorDepositado <= 0) {
            return this.mostrarErro("Informe um valor válido!")
        } else if(valorDepositado < 1) {
            return this.mostrarErro("Deposite um valor acima de R$ 1,00!")
        } else if(valorDepositado >= 1 && valorDepositado < 1.75){
            const troco = (valorDepositado - 1).toFixed(2);
            return this.mostrarMensagem("Tempo: 30 minutos", troco);
        } else if(valorDepositado >= 1.75 && valorDepositado < 3) {
            const troco2 = (valorDepositado - 1.75).toFixed(2);
            return this.mostrarMensagem("Tempo: 60 minutos", troco2);
        } else {
            const troco3 = (valorDepositado - 3).toFixed(2);
            return this.mostrarMensagem("Tempo: 120 minutos", troco3);
        };
    };

    mostrarErro(msg){
        document.getElementById("resultado").textContent = msg;
        document.getElementById("valor").value = '';
        document.getElementById("troco").textContent = '';
    };

    mostrarMensagem(msg, troco){
        document.getElementById("resultado").textContent = msg;
        document.getElementById("valor").value = '';
        document.getElementById("troco").textContent = `Troco: ${troco}`;
    };
    
};

// Criar instancia para usar a classe
const pq = new Parquimetro();