// Seleciona a nossa ul com a lista de tarefas no HTML
const tarefas = document.getElementById("listaTarefas");
// Faz uma requisição GET para a API externa pra buscar todas as tarefas
fetch("https://crudcrud.com/api/03ac51f2c62646628abc0a79cfea511e/tarefas")
.then(resposta => resposta.json()) // Converte o corpo da resposta em JSON
.then((listaDeTarefas) => {
    // Itera sobre cada tarefa do array
    listaDeTarefas.forEach(element => {
        // Cria um novo elemento de lista <li> para cada tarefa (forEach)
        const item = document.createElement("li");
        // Passo o valor do elemento com innerHTML
        item.innerHTML = `${element.descricao} <button onClick="remove('${element._id}', this)">X</button>`; 
        // Adicionar o item a lista ul
        tarefas.appendChild(item);
    });
})

// Adicionar um ouvinte de evento click no botão "Adicionar"
const adicionar = document.getElementById("add");
adicionar.addEventListener("click", () => {
    // Pegar a descrição que o usuário adicionou no input
    const descricaoTarefa = document.getElementById("tarefa").value;
    // Faz uma requisição POST para a API externa para criar a tarefa
    fetch("https://crudcrud.com/api/03ac51f2c62646628abc0a79cfea511e/tarefas", {
        // Podemos usar outros métodos (GET, POST, PUT e DELETE)
        method: "POST",
        // Definir os cabeçalhos
        headers: {
            "Content-Type": "application/json"
        },
        // Converte minha resposta em JS para JSON
        body: JSON.stringify({descricao: descricaoTarefa})
    })
    .then(resposta => resposta.json())
    .then((element) => {
        // Cria um novo elemento de lista <li> para cada tarefa
        const item = document.createElement("li");
        // Passo o valor do elemento com innerHTML
        item.innerHTML = `${element.descricao} <button onClick="remove('${element._id}', this)">X</button>`;
        // Adicionar o item a lista ul
        tarefas.appendChild(item);
    })
})

function remove(id, botao) {
    // Deleta a tarefa 
    fetch(`https://crudcrud.com/api/03ac51f2c62646628abc0a79cfea511e/tarefas/${id}`, {
        // Podemos usar outros métodos (GET, POST, PUT e DELETE)
        method: "DELETE",
    })
    // Remover o <li> da tela
    .then(resposta => {
        if (resposta.ok) {
            botao.parentElement.remove(); // Remove o <li> do DOM
        }
    })
}