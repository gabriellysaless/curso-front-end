import styled from "styled-components";

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #eee
`;

export const Input = styled.input`
    cursor: pointer;
`;

export const Botao = styled.button`
    padding: 10px 16px;
    border :none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
`;

export const TextoItem = styled.span`
    text-decoration: ${({ $concluida}) => ( $concluida ? "line-through" : "none")};
    color: ${({ $concluida}) => ( $concluida ? "#999" : "#000")};
`; /* Props com $ são usadas no styled-components e NÃO vão para o DOM */

export const BotaoRemover = styled(Botao)` /* Botão que pega os estilis do principal "Botao"*/
    background-color: #f44336;

    &:hover{
        background-color: #d32f2f;
    }
`;