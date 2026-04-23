import { useEffect, useState } from "react"
import Tarefa from "./components/Tarefa"

const API_URL = 'https://crudcrud.com/api/8106c2345c3a44448d81c98f84f6e9e7/TAREFAS'

function App() {

  const [tarefas, setTarefas] = useState ([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  //Buscar os dados na API assim que o componente for montado
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  }, []) // '[]' vazio, executa somente uma vez, ou seja, somente quando apertar o botao

  const handleSubmit = (e) => {
    e.preventDefault(); /* impede recarregar a página */

    if(novaTarefa.trim() === '') return;

    //Envio da nova tarefa para a API

    const nova = {texto: novaTarefa.trim()}
    fetch(API_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      setNovaTarefa(''); /* apagar texto do input */

    })
    .catch(error => console.error("Erro ao buscar tarefas:", error))

  }

  return (
  <>
    <h1>To-Do List App</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite uma nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
    <ul>
      {tarefas.map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto}/> )} {/* as chaves são para colocar uma expressão/código JS dentro de JSX */}
    </ul>
  </>
)
}

export default App
