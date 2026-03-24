import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
`;

export const Card = styled.div`
  background-color: #fff;
  max-width: 260px;
  height: 480px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Imagem = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const Titulo = styled.h2`
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 0;
`;

export const Descricao = styled.p`
  margin: 0;
`;

export const Preco = styled.span`
  font-weight: bold;
  color: #D35E01;
`;

export const Botao = styled.button`
  background-color: ${({ $adicionado }) => $adicionado ? "#198754" : "#6c757d"}; 
  /* se colocasse chaves {} na condição precisaria do return */
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: white;

  &:hover{
    font-weight: bold;
  }
`;