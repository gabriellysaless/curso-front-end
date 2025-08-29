/**
 * 1° - Pegar o valor informado (ok)
 * 2° - Pegar a categoria informado (ok)
 * 3° - Impedir números negativos (ok)
 * 4° - De acordo com a categoria, atualiza o valor (ok)
 *  4.1 - Criar variáveis para armazenar os novos valores em cada   categoria (ok)
 * 5° - Atualizar Interface ()
 * 6° - Limpar os campos após clicar no botão adicionar ()
 */

const matrizGastos = [ // armazena tanto a categoria quanto o valor inicial
    ["alimentacao", 0], //como cada item do array precisa de dois valores, criamos outro array
    ["transporte", 0],
    ["lazer", 0],
    ["outros", 0],
    ["total", 0]
]

// Funções Utilitárias
const obterElemento = (id) => document.getElementById(id); // obtem os outros elementos (p, select...)
const valorNegativo = (valor) => valor < 0; //devolve 'true' ou 'false'
const somaValor = (total, valor) => total + valor;
const limparCampos = () => obterElemento('valor').value = " ";
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',')

// Obter Valores do Formulário
const obterValor = () => parseFloat(obterElemento('valor').value); 
const obterCategoriaInformada = () => obterElemento('categoria').value; // obtem a categoria que selecionarmos ao usar o .value


// Obter Categoria da Matriz
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);


// Atualizar Valores da Matriz
const atualizarValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);

const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = `${nome}: R$ ${formataMoeda(valor)}`;
    });
}




function adicionarGasto() {
    const valorInformado = obterValor();
    const categoriaInformada = obterCategoriaInformada();

    if (valorNegativo(valorInformado)) {
        alert('Valor Inválido. O valor não pode ser negativo!');
        return;
    }

    const categoria = obterCategoria(matrizGastos, categoriaInformada);
    const total = obterCategoria(matrizGastos, 'total');

    atualizarValorCategoria(categoria, valorInformado);
    atualizarValorCategoria(total, valorInformado);
    atualizarInterface();
    limparCampos();
}