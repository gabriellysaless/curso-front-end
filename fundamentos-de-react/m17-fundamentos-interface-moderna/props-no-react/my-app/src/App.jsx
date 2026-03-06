import Tarefa from "./components/Tarefa"

function App() {

  const tarefas = [
    {id: 1, texto: "Estudar React"},
    {id: 2, texto: "Fazer compras"},
    {id: 3, texto: "Responder e-mails"}
  ]

  return (
  <>
    <h1>To-Do List App</h1>
    <ul>
      {tarefas.map(tarefa => <Tarefa key={tarefa.id} texto={tarefa.texto}/> )} {/* as chaves são para colocar uma expressão/código JS dentro de JSX */}
    </ul>
  </>
)
}

export default App
