// Criando Elementos
const h2 = document.createElement("h2");
const btn = document.createElement("button");
const body = document.querySelector("body");

h2.textContent = "Criei o subtítulo somente usando JavaScript";
btn.textContent = "Clique Aqui"

body.append(h2, btn); // append aceita vários nós, strings de texto de uma vez

// Manipulando estilos
h2.style.backgroundColor = "#9FC849";
// Ou usando cssText = ``
btn.style.cssText = `
  background-color: #49afc8ff;
  color: white;
  padding: 5px;
  border-radius: 5px;
`;

// Adicionando eventos pelo JS
btn.addEventListener("click", () => {
    alert("Você clicou!")
});