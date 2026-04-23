const burguerButton = document.getElementById("burguer");
const menu = document.getElementById("navMenu");

burguerButton.addEventListener("click", () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});