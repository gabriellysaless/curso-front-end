const usuario = document.getElementById("listaUsuario");

// Buscar usuários já cadastrados
fetch("https://crudcrud.com/api/03ac51f2c62646628abc0a79cfea511e/usuarios")
.then(resposta => resposta.json())
.then((listaDeUsuario) => {
    listaDeUsuario.forEach(element => {
        const item = document.createElement("li");
        item.innerHTML = `Usuário: ${element.usuario} <br>E-mail: ${element.email} <button onClick="remove('${element._id}', this)">X</button>`; 
        usuario.appendChild(item);
    });
})

// Adicionar novo usuário
const adicionar = document.getElementById("add");
adicionar.addEventListener("click", () => {
    //Pegar valores do input
    const descricaoUsuario = document.getElementById("usuario").value;
    const descricaoEmail = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/03ac51f2c62646628abc0a79cfea511e/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario: descricaoUsuario, email: descricaoEmail})
    })
    .then(resposta => resposta.json())
    .then((element) => {
        const item = document.createElement("li");
        item.innerHTML = `Usuário: ${element.usuario} <br>E-mail: ${element.email} <button onClick="remove('${element._id}', this)">X</button>`;
        usuario.appendChild(item);
    })
})

function remove(id, botao) {
    fetch(`https://crudcrud.com/api/03ac51f2c62646628abc0a79cfea511e/usuarios/${id}`, {
        method: "DELETE",
    })
    .then(resposta => {
        if (resposta.ok) {
            botao.parentElement.remove();
        }
    })
}