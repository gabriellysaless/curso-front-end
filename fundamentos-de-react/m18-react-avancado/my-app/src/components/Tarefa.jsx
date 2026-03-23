import { useState, memo } from "react";
import './Tarefa.css'

function Tarefa ({texto, id, onDelete}) {

    const [concluida, setConcluida] = useState(false);

    const alternarConcluida = () => {
        setConcluida(!concluida);
    }

    return (
        <li>
            <input type="checkbox" onChange={alternarConcluida}/> <span className={ concluida ? 'concluida' : ''}>
                {texto}
            </span>
            <button onClick={() => onDelete(id)}>Remover</button>
        </li>
    ) 
}

export default memo(Tarefa); /* memo => evita renderização de um componente se as props não mudam */