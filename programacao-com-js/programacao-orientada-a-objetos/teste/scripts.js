// Classe principal do parquímetro
class Parquimetro {
  constructor() {
    this.tabelaPrecos = [
      { valor: 1.0, tempo: 30 },
      { valor: 1.75, tempo: 60 },
      { valor: 3.0, tempo: 120 }
    ];
  }

  calcular(valorInserido) {
    if (valorInserido < 1) {
      return { mensagem: "Valor insuficiente! Insira no mínimo R$1,00." };
    }

    // Procura o melhor tempo compatível
    let tempo = 0;
    let valorNecessario = 0;

    for (let opcao of this.tabelaPrecos) {
      if (valorInserido >= opcao.valor) {
        tempo = opcao.tempo;
        valorNecessario = opcao.valor;
      }
    }

    let troco = (valorInserido - valorNecessario).toFixed(2);

    return {
      mensagem: `Tempo: ${tempo} minutos<br>Troco: R$ ${troco}`
    };
  }
}

// Conectando com a interface
document.getElementById("calcular").addEventListener("click", () => {
  const valor = parseFloat(document.getElementById("valor").value);
  const parquimetro = new Parquimetro();
  const resultado = parquimetro.calcular(valor);

  document.getElementById("mensagem").innerHTML = resultado.mensagem;
});
