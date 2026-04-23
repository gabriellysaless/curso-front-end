import { API_URL } from "./utils.js";

export class UserManager {
  constructor(listaUsuarioElement) {
    this.listaUsuario = listaUsuarioElement;
  }

  // LISTAR USUÁRIOS
  listUser(element) {
    // Criando a lista
    const item = document.createElement("li");
    item.innerHTML = `
        Usuário: ${element.usuario} <br>
        E-mail: ${element.email}
    `;

    // Criando o botão
    const btnRemove = document.createElement("button");
    btnRemove.textContent = "X";
    btnRemove.addEventListener("click", () => {
      this.removeUser(element.id, btnRemove);
    });

    item.appendChild(btnRemove);
    this.listaUsuario.appendChild(item);
  }

  // BUSCAR USUÁRIOS CADASTRADOS
  fetchUsers() {
    fetch(API_URL)
      .then(resposta => resposta.json())
      .then(listaDeUsuario => {
        listaDeUsuario.forEach(element => this.listUser(element));
      });
  }

  // ADICIONAR USUÁRIOS
  addUser(usuario, email) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, email }),
    })
    .then(resposta => resposta.json())
    .then(element => this.listUser(element));
  }

  // REMOVER USUÁRIOS
  removeUser(id, botao) {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
    .then(resposta => {
      if (resposta.ok) {
        botao.parentElement.remove();
      }
    });
  }
}
