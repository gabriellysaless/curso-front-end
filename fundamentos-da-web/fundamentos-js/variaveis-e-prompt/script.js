//Entrada
const valorLanche = prompt("Valor do jantar R$: "); //função que exibe uma caixa de diálogo com uma mensagem, permitindo que o usuário insira um valor

//Processamento
const valorGarcom = Number(valorLanche) * 0.10;
const valorTotal = Number(valorLanche) + valorGarcom;

//Saída
alert(`Valor total: R$ ${valorTotal}`);