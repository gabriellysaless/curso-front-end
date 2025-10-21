// Modularização (ES Module)
import { usuario, adicionar } from "./utils.js";
import  { UserManager } from "./classes.js";

const userManager = new UserManager(usuario);

userManager.fetchUsers()

// Adicionar novo usuário
adicionar.addEventListener("click", () => {
    //Pegar valores do input
    const descricaoUsuario = document.getElementById("usuario").value;
    const descricaoEmail = document.getElementById("email").value;

    userManager.addUser(descricaoUsuario, descricaoEmail);
});
