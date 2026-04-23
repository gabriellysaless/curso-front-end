// Funções Utilitárias
const obterElemento = (id) => document.getElementById(id); // função geral para obter algum elemento
const formataMoeda = (valor) => valor.toFixed(2).replace('.', ',');

// Funções puras
export const valorNegativo = (valor) => valor < 0;

export const atualizarInterface = (gastosPorCategoria) => {
    
    const categorias = gastosPorCategoria.categorias; //acessa o getter 'categorias'(em ListaGastosPorCategoria) da instância 'gastosPorCategoria'
    
    categorias.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome); // Para cada "nome" cria o 'elemento' por meio da função de obter elemento e o nome que está sendo passado no forEach
        if (elemento) {
            // Nome com a primeira letra maiúscula na interface
            elemento.textContent = `${nome.charAt(0).toUpperCase() + nome.slice(1)}: R$ ${formataMoeda(valor)}`;
          }    });

    const elementoTotal = obterElemento("total");
    elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`
}