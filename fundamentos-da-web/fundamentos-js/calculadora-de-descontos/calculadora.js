function calcularDesconto() {
    //Entrada de dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

    //Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto

    //Saída
    document.getElementById("resultado").textContent = `Valor final: R$ ${valorFinal}`
}
