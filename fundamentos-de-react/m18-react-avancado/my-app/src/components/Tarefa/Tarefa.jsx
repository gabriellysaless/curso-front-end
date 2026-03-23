import { useState, memo } from "react";
import styled from "styled-components";

const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #eee
`;

const Botao = styled.button`
    padding: 10px 16px;
    border :none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
`;

const TextoItem = styled.span`
    text-decoration: ${({ $concluida}) => ( $concluida ? "line-through" : "none")};
    color: ${({ $concluida}) => ( $concluida ? "#999" : "#000")};
`; /* Props com $ são usadas no styled-components e NÃO vão para o DOM */

const BotaoRemover = styled(Botao)` /* Botão que pega os estilis do principal "Botao"*/
    background-color: #f44336;

    &:hover{
        background-color: #d32f2f;
    }
`;

function Tarefa ({texto, id, onDelete}) {

    const [concluida, setConcluida] = useState(false);

    const alternarConcluida = () => {
        setConcluida(!concluida);
    }

    return (
        <Item>
            <input type="checkbox" onChange={alternarConcluida}/> <TextoItem $concluida={concluida}>{texto}</TextoItem>
            <BotaoRemover onClick={() => onDelete(id)}>Remover</BotaoRemover> {/* onDelete dentro de uma função para só ser executado DEPOIS que clicar no botão */}
        </Item>
    ) 
}

export default memo(Tarefa); /* memo => evita renderização de um componente se as props não mudam */