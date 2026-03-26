import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { tarefasState, filtroState, novaTarefaState } from "../../atoms/tarefasAtoms";
import { tarefasFiltradasState } from "../../selectors/tarefasSelector";
import Tarefa from "../Tarefa";
import { Formulario, Input, Botao, Lista, Filtro } from "./styles.jsx";

const API_URL = "https://crudcrud.com/api/a5df8ec065054d0e9f4d29df4670fb13/tarefas"

function ListaTarefas() {

    const [tarefas, setTarefas] = useRecoilState(tarefasState);
    const [filtro, setFiltro] = useRecoilState(filtroState);
    const tarefasFiltradas = useRecoilValue(tarefasFiltradasState);

    const [novaTarefa, setNovaTarefa] = useRecoilState(novaTarefaState);

    /* GET */
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(dados => setTarefas(dados))
        .catch(error => console.log("Erro ao buscar tarefas:", error))
    }, []);

    /* POST */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (novaTarefa.trim() === "") return;

        const nova = {
        texto: novaTarefa,
        concluida: false
        };

        fetch(API_URL, {
        method: "POST",
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(nova)
        })
        .then(res => res.json())
        .then(tarefaCriada => {
        setTarefas([...tarefas, tarefaCriada]);
        setNovaTarefa("");
        })
        .catch(error => console.error("Erro ao criar tarefas:", error))
    };

    /* DELETE */
    const deletarTarefa = (id) => {
        fetch(`${API_URL}/${id}`, {
        method: "DELETE"
        })
        .then(() => {
        setTarefas(prev => 
            prev.filter(t => t._id !== id)
        );
        })
        .catch(error => console.log("Erro ao deletar tarefa:", error));
    }

    /* PUT */
    const toggleConcluida = (id, statusConclusao) => {

        const tarefaMudada = tarefas.find(t => t._id === id);

        if (!tarefaMudada) return;

        const {_id, ...resto} = tarefaMudada;

        fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            ...resto,
            concluida: !statusConclusao
        })
        })
        .then(() => {
            /* Atualizar a lista no React */
            setTarefas(prev =>
            prev.map(t =>
                t._id === id ? {...t, concluida: !statusConclusao} : t)
            );
        })
        .catch(error => console.log("Erro ao atualizar tarefa:", error));
    }

    return(
        <>
            <Formulario onSubmit={handleSubmit}>
                <Input type="text"
                    placeholder="Digite a tarefa"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa((e.target.value))}
                />
                <Botao type="submit">Adicionar</Botao>
                
                <Filtro
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="todas">Todas as Tarefas</option>
                    <option value="concluidas">Tarefas Concluídas</option>
                    <option value="pendentes">Tarefas Pendentes</option>
                </Filtro>
            </Formulario>
            <Lista>
                {tarefasFiltradas.map((tarefa) => (
                    <Tarefa 
                        key={tarefa._id} 
                        texto={tarefa.texto}
                        id={tarefa._id}
                        concluida={tarefa.concluida}
                        onDelete={deletarTarefa}
                        onToggle={toggleConcluida}
                    />
                ))}
            </Lista>
        </>
    )
};

export default ListaTarefas;