import { useState } from "react";

import { Card, Imagem, Titulo, Descricao, Preco, Botao} from "./styles.jsx"

function CardProduto({produto}) {

const [adicionado, setAdicionado] = useState(false);

  return (
    <>
        <Card>
          <Imagem src={produto.imagem} alt={produto.nome} />
          <Titulo>{produto.nome}</Titulo>
          <Descricao>{produto.descricao}</Descricao>
          <Preco>{produto.preco}</Preco>
          <Botao 
            $adicionado={adicionado} 
            onClick={() => setAdicionado(!adicionado)}
          >
            {adicionado ? "Adicionado" : "Adicionar ao carrinho"} {/* Muda o texto quando adicionado */}
          </Botao>
        </Card>
    </>
  )
}

export default CardProduto;
