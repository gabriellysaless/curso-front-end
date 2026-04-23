const botaoTema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {

    //Verificar se o usuário já tem um tema pré-definido
    const temaAtual = localStorage.getItem("tema");

    //Verificar qual é o tema e inverter
    const novoTema = temaAtual === "dark" ? "light" : "dark"

    //Adicionar a classe dark no elemento body

    document.body.classList.remove(temaAtual); //Existe algumas regras nos navegadores que não apaga a classe antiga, com isso precisa remover uma antes de alterar.
    document.body.classList.toggle(novoTema);

    //Salvar as preferencias no localStorage
    localStorage.setItem("tema", novoTema);

    //Atualiza o texto do botão
    botaoTema.textContent = novoTema === "dark" ? '☀︎' : '☾';
})

document.addEventListener('DOMContentLoaded', () => {
    //Verificar se tem tema salvo
    const temaSalvo = localStorage.getItem("tema");

    //Se for dark, adiciona a classe e altera o botão
    if(temaSalvo === "dark"){
        document.body.classList.add("dark");
        botaoTema.textContent = '☀︎';
    } else {
        //Caso contrário é light e o botão deve ser para mudar para dark
        botaoTema.textContent = '☾';
    }
})
