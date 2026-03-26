import styled from "styled-components";

export const Formulario = styled.form`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 12px;
    }
`;

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;   

export const Botao = styled.button`
    padding: 10px 16px;
    border: none;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #45a049;
    }
`;   

export const Filtro = styled.select`
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 600px) {
        width: 100%;
        padding: 10px;
    }
`;

export const Lista = styled.ul`
    list-style: none;
    padding: 0;
`;
