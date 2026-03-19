import { useContext, useEffect, useState } from "react"
import Tarefa from "./Tarefa"
import { useInput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";

const API_URL = 'https://crudcrud.com/api/5440303fe02944d4aee3040ef6b30ab2/tarefas'

function ListaTarefas() {

  const [tarefas, setTarefas] = useState ([]);
  const tarefa = useInput();

  const {usuario} = useContext(UserContext);

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

    const nova = {usuario: usuario.nome, texto: tarefa.valor} /* nome do usuário que fez o login e digitou a tarefa agora é registrado na API */

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
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite uma nova tarefa"
            value={tarefa.valor}
            onChange={tarefa.onChange}
        />
        <button type="submit">Adicionar</button>
        </form>
        <ul>
        {tarefas
          .filter(tarefa => tarefa.usuario === usuario.nome) /* faz um filtro e só mostra as atividades que cada usuário digitar */
        .map(tarefa => <Tarefa key={tarefa._id} texto={tarefa.texto}/> )} {/* as chaves são para colocar uma expressão/código JS dentro de JSX */}
        </ul>
    </>
    )
}

export default ListaTarefas