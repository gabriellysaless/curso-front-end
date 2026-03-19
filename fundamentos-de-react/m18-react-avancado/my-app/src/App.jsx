import { useEffect, useState } from "react"
import Tarefa from "./components/Tarefa"
import { useInput } from "./hooks/useInput";

const API_URL = 'https://crudcrud.com/api/5440303fe02944d4aee3040ef6b30ab2/tarefas'

function App() {

  const [tarefas, setTarefas] = useState ([]);
  const tarefa = useInput();

    /* Teste de memoização para conferir se o app está recarregando várias vezes desnecessáriamente */
    useEffect(() => {
      console.log("Componente montado.");
    }, [])
    console.log("Componente App executado.")

  //Buscar os dados na API assim que o componente for montado
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados => setTarefas(dados))
    .catch(error => console.error("Erro ao buscar tarefas:", error))
  }, []) // '[]' vazio, executa somente uma vez, ou seja, somente quando apertar o botao

  const handleSubmit = (e) => {
    e.preventDefault(); /* impede recarregar a página */

    if(tarefa.valor === '') return;

    //Envio da nova tarefa para a API

    const nova = {texto: tarefa.valor}
    fetch(API_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(nova)
    })
    .then(res => res.json())
    .then(tarefaCriada => {
      setTarefas([...tarefas, tarefaCriada]);
      tarefa.limpar(); /* apagar texto do input */

    })
    .catch(error => console.error("Erro ao buscar tarefas:", error))

  }

  return (
  <>
    <h1>To-Do List App</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Digite uma nova tarefa"
        value={tarefa.valor}
        onChange={tarefa.onChange}
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
