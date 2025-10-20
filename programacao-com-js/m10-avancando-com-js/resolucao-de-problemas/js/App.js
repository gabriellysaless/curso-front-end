// Modularização (ES Module)
import {Categoria, ListaGastosPorCategoria} from "./classes.js";
import {valorNegativo, atualizarInterface} from "./utils.js"

// POO
const gastosPorCategoria = new ListaGastosPorCategoria( 
    // O objeto gastosPorCategoria tem métodos e propriedades definidos na classe ListaGastosPorCategoria, e armazena internamente vários objetos da classe Categoria, cada um com seus próprios métodos e valores.
    new Categoria("alimentacao"),
    new Categoria("transporte"),
    new Categoria("lazer"),
    new Categoria("outros")
)


// Manipulação DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) => {
    // Prevenção do comportamento padrão
    evento.preventDefault();

    const valorInformado = parseFloat(formulario.elements.valor.value);
    const categoriaInformada = formulario.elements.categoria.value;

    if (valorNegativo(valorInformado)) {
        alert('Valor Inválido. O valor não pode ser negativo!');
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
        
    if (!categoria) {
        alert("Categoria não encontrada!");
        return;
    }
    
    categoria.adicionarValor(valorInformado);

    atualizarInterface(gastosPorCategoria);
    formulario.reset();
})


    
