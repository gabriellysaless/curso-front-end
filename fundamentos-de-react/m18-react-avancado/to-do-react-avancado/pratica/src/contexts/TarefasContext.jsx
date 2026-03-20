import { createContext } from "react";
import { useState, useEffect } from "react";


export const TarefasContext = createContext();

const API_URL = 'https://crudcrud.com/api/f86a84a98c2e49539955910cbf48d888/tarefas'

export function TarefasProvider({children}) {
      const [tarefas, setTarefas] = useState([]);
    
    /* Função para buscar no banco de dados as tarefas ja existentes */
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(dados => setTarefas(dados))
        .catch(error => console.log("Erro ao buscar tarefas:", error))
    }, [])

    /* Função para colocar o valor na lista */
    const handleSubmit = (texto, limparInput) => {
        if (texto.trim() === "") return;

        const nova = {
        texto: texto.trim(),
        concluida: false
        }
        fetch(API_URL, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nova)
        })
        .then(res => res.json())
        .then(tarefaCriada => {
            setTarefas([...tarefas, tarefaCriada]);
            limparInput('');
        })
        .catch(error => console.log("Erro ao buscar tarefas:", error))
    }

    /* Função para atualizar o estado da tarefa */
    const toggleConcluida = (id, statusAtual) => {
        const tarefa= tarefas.find(t => t._id === id);

        if (!tarefa) return;

        const {_id, ...resto} = tarefa;

        fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            ...resto,
            concluida: !statusAtual /* substitui o valor antigo, ex: false para true */
        })
        })
        .then(() => {
            /* Atualizar a lista no React */
            setTarefas(prev =>
                prev.map(t =>
                t._id === id ? {...t, concluida: !statusAtual} : t
            )
            );
        })
        .catch(error => console.log("Erro ao atualizar tarefa:", error));
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
        <TarefasContext.Provider
            value={{
                tarefas,
                handleSubmit,
                toggleConcluida,
                deletarTarefa
            }}
        >
            {children}
        </TarefasContext.Provider>
    );
}