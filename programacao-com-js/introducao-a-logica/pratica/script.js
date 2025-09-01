/**
 * 1° Assim que carregar a página gera um número aleatório; ok
 * 2° Quando o usuário digitar e clicar em chutar: 
 *  2.1 Aparece o número de tentativas restantes, ex: 10; ok
 *  2.2 Se o número não for entre 0 e 100 pede para digitar um número válido; ok
 *  2.3 Se o número for válido: 
 *   2.3.1 OU dá a dica (número maio ou menor) e atualiza o número de tentativas; ok 
 *   2.3.2 OU finaliza ao acertar; ok 
 *   2.3.3 OU se for a ultima tentativa finaliza; ok
 */

/*
    VARIÁVEIS PRINCIPAIS
    Número secreto
    Total de tentativas
    capturar elementos do js (p, input ...)
*/

let numeroSecreto = Math.floor(Math.random() * 101); // Math.random(): gera um número decimal entre 0 e 1, por isso temos que multiplicar por 101 para transformar em um número inteiro

let tentativas = 10;

const mensagem = document.getElementById("msg");
const tentativasRestantes = document.getElementById("tentativas");
const botaoChutar = document.getElementById("btn-chutar")

function chutar() {
    const chute = document.getElementById("inumb");

    if (chute.value.trim() === "") { //.value.trim() pega o valor inteiro
        mensagem.textContent = "Digite um número válido entre 0 e 100!";
        return;
    }
    
    let numero = Number(chute.value.trim()); // para ter certeza que converteu o valor para número

    console.log(numero);

    if (isNaN(numero) || numero < 0 || numero >  100) {
        mensagem.textContent = "Digite um número válido entre 0 e 100!";
        return;
    }

    if (numero === numeroSecreto) {
        mensagem.textContent = `Acertou! o número secreto era ${numeroSecreto}`;
        chute.disabled = true;
        botaoChutar.disabled = true;
        return;
    }

    tentativas--;

    if (tentativas === 0) {
        mensagem.textContent = `Fim das tentativas! O número secreto era ${numeroSecreto}`;
        tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`
        chute.disabled = true;
        botaoChutar.disabled = true;
        return;
    }

    if (numero < numeroSecreto) {
        mensagem.textContent = "O número secreto é MAIOR";
    } else {
        mensagem.textContent = "O número secreto é MENOR"
    }
    
    tentativasRestantes.textContent = `Tentativas restantes: ${tentativas}`
    chute.value = "";
    chute.focus();
}