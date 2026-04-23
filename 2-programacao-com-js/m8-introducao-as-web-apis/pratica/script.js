document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if (!(cepInformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert("CEP não encontrado!")
            }
        })
        .catch(error => console.error("Erro ao buscar CEP: ", error));
});

const form = document.querySelector("form");



form.addEventListener("submit", (event) => {
    event.preventDefault(); //Evita que a página recarregue
    
    // Captura os valores ATUALIZADOS dos inputs
    const cep = document.getElementById("cep").value;
    const logradouro = document.getElementById("logradouro").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const numero = document.getElementById("numero").value;

    //Salvar Dados
    localStorage.setItem("cep", cep);
    localStorage.setItem("logradouro", logradouro);
    localStorage.setItem("bairro", bairro);
    localStorage.setItem("cidade", cidade);
    localStorage.setItem("estado", estado);
    localStorage.setItem("numero", numero);

    alert("Dados salvos!")
})

document.addEventListener('DOMContentLoaded', () => {
    //Verificar se tem tema salvo
    const cepOf = localStorage.getItem("cep");
    const logradouroOf = localStorage.getItem("logradouro");
    const bairroOf = localStorage.getItem("bairro");
    const cidadeOf = localStorage.getItem("cidade");
    const estadoOf = localStorage.getItem("estado");
    const numeroOf = localStorage.getItem("numero");

    if (cepOf) document.getElementById("cep").value = cepOf;
    if (logradouroOf) document.getElementById("logradouro").value = logradouroOf;
    if (bairroOf) document.getElementById("bairro").value = bairroOf;
    if (cidadeOf) document.getElementById("cidade").value = cidadeOf;
    if (estadoOf) document.getElementById("estado").value = estadoOf;
    if (numeroOf) document.getElementById("numero").value = numeroOf;
})