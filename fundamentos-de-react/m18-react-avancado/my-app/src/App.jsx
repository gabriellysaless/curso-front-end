import { useEffect, useState } from "react"
import ListaTarefas from "./components/ListaTarefas"
import Login from "./components/Login";
import { UserContext } from "./contexts/UserContext";


function App() {

  const [usuario, setUsuario] = useState({nome: null, estaLogado: false});

  return (
    <UserContext.Provider value={{usuario, setUsuario}}> {/* com o provider posso recuperar os valores em qualquer componente usando o useContext*/}
      <>
        <h1>To-Do List App</h1>
        {usuario.estaLogado ? <ListaTarefas/> : <Login/>}
      </>
    </UserContext.Provider>
)
}

export default App
