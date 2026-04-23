import { useEffect } from "react"
import Tarefa from "../Tarefa/Tarefa"
import { useInput } from "../../hooks/useInput";
import styles from "./ListaTarefas.module.css"
import { useRecoilState, useRecoilValue } from "recoil";
import userState from "../../state/user";
import { tarefasState } from "../../state/tarefas";

const API_URL = 'https://crudcrud.com/api/b040b67273014ad59931a214d6303a9e/tarefas'

function ListaTarefas() {

  const [tarefas, setTarefas] = useRecoilState (tarefasState);
  const tarefa = useInput();
  const usuario = useRecoilValue(userState);

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

  /* Função para excluir tarefa */
  const deletarTarefa = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      /* Atualiza o estado removendo a tarefa deletada */
      setTarefas(prev =>
          prev.filter(t => t._id !== id) /* prev: estado anterior do setTarefas(tarefas) */
      );
    })
    .catch(error => console.log("Erro ao deletar tarefa:", error));
  };

  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Digite uma nova tarefa"
            value={tarefa.valor}
            onChange={tarefa.onChange}
        />
        <button className={styles.button} type="submit">Adicionar</button>
        </form>
        <ul className={styles.list}>
          {tarefas
            .filter(tarefa => tarefa.usuario === usuario.nome) /* faz um filtro e só mostra as atividades que cada usuário digitar */
          .map(tarefa => 
            <Tarefa 
              key={tarefa._id} /* key: usado no React interno */
              texto={tarefa.texto}
              id={tarefa._id}
              onDelete={deletarTarefa}
            /> 
          )}
        </ul>
    </>
    )
}

export default ListaTarefas