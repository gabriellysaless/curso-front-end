function calcular() {
    let massa = Number(document.getElementById("peso").value) || 0;
    let tamanho = Number(document.getElementById("altura").value) || 0;

    let imc = massa / (tamanho * tamanho)

    document.getElementById("final").textContent = `Seu IMC é ${imc.toFixed(2)}`;

    if (imc < 18.5) {
        document.getElementById("classificacao").textContent = "Você está abaixo do peso!"
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("classificacao").textContent = "Você está com seu peso ideal!"
    } else {
        document.getElementById("classificacao").textContent = "Você está com sobrepeso"
    }
}