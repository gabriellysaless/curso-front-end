/*
    Elaborar um programa para um Cinema, onde o Usuário possa digitar o título e a duração de um filme em minutos. Exiba o título do filme e converta a duração para horas e minutos.

    1. obter o nome do filme
    2. obter a duração em minutos
    3. converter a duração de minutos em horas
     3.1 dividir o valor por 60 para passar para hora (ex: 90 min / 60 = 1,5 horas)
     3.2 pegar o resto da divisão e multiplicar po 60 para achar os minutos (ex: resto = 0,5 * 60 => 30 minutos)
     3.3 juntar a hora e o minuto
    4. exibir o título
    5. exibir a duração
*/


function resultado() {
    const titulo = document.getElementById("nome").value;
    const duracao = Number(document.getElementById("tempo").value);

    const hora = Math.floor(duracao / 60); //parte inteira das horas
    const minuto = duracao % 60; //ou duracao - hora * 60
    
    document.getElementById("titulo-saida").textContent = titulo.toUpperCase();
    document.getElementById("duracao-saida").textContent = `${hora} horas e ${minuto} minutos.`;
};