import { useState, useEffect, memo } from "react";
import './Tarefa.css'

function Tarefa ({texto}) {

    const [concluida, setConcluida] = useState(false);

        /* Teste de memoização para conferir se o app está recarregando várias vezes desnecessáriamente */
        useEffect(() => {
            console.log("Componente executado tarefa.", texto);
        }, [])

        console.log("Componennte tarefa executado.", texto)

    const alternarConcluida = () => {
        setConcluida(!concluida);
    }

    return (
        <li><input type="checkbox" onChange={alternarConcluida}/> <span className={ concluida ? 'concluida' : ''}>{texto}</span> <button>Remover</button></li>
    ) /* texto dentro de span (elemento) para poder colocar uma classe */
}

export default memo(Tarefa); /* memo => evita renderização de um componente se as props não mudam */