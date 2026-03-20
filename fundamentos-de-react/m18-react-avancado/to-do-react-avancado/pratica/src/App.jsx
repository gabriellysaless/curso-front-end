import { useState } from "react"
import Tarefa from "./components/Tarefa/Tarefa"
import "./styles/global.css"
import { useTarefas } from "./hooks/useTarefas";

function App() {

  const { tarefas, handleSubmit, toggleConcluida, deletarTarefa } = useTarefas();
  const [novaTarefa, setNovaTarefa] = useState('');
  const [filtro, setFiltro] = useState("todas");

  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(novaTarefa, setNovaTarefa);
  };


  return (
    <>
      <h1>To Do List</h1>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Digite a tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button type="submit">Adicionar</button>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="todas">Todas as Tarefas</option>
          <option value="concluidas">Tarefas Concluídas</option>
          <option value="pendentes">Tarefas Pendentes</option>
        </select>
      </form>
      <ul>
        {tarefas
          .filter(tarefa => {
            if (filtro === "concluidas") return tarefa.concluida;
            if (filtro === "pendentes") return !tarefa.concluida;
            return true; /* todas */
          })
          .map(tarefa => (
            <Tarefa 
              key={tarefa._id} 
              texto={tarefa.texto}
              concluida={tarefa.concluida}
              onToggle={() => toggleConcluida(tarefa._id, tarefa.concluida)}
              remover={() => deletarTarefa(tarefa._id)} /* em Tarefa.jsx só tem a prop, mas para funcionar precisa ser passada uma função, por isso a arrow function */
            />
          ))
        }
      </ul>
    </>
  )
}

export default App
