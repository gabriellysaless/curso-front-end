import ListaTarefas from "./components/ListaTarefas/ListaTarefas"
import Login from "./components/Login";
import { useRecoilValue } from "recoil";
import userState from "./state/user";
import { tarefasCountSelector } from "./state/tarefas";


function App() {

  const usuario = useRecoilValue(userState);
  const tarefasCount = useRecoilValue(tarefasCountSelector);

  return (
      <>
        <h1>To-Do List {usuario.nome}'s App({tarefasCount})</h1>
        {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
      </>
)
}

export default App
