import { memo} from "react";
import './Tarefa.css'

function Tarefa ({texto, concluida, onToggle, remover}) {

    return(
        <li>
            <input 
                type="checkbox" 
                checked={concluida}
                onChange={onToggle}
            />
            <span className={concluida ? 'tarefaConcluida' : ''}>
                {texto}
            </span> 
            <button onClick={remover}>Remover</button>
        </li>
    );
}

export default memo(Tarefa); 