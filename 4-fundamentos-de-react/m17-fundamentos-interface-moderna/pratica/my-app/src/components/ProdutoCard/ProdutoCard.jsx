import "./ProdutoCard.css"

function ProdutoCard({nome, preco, imagem, descricao }) {
    return (
        <div className="produto-card">
            <h2 className="produto-titulo">{nome}</h2>
            <img className="produto-imagem" src={imagem} alt={nome} />
            <span className="produto-preco">R$ {preco}</span>
            <p className="produto-desc">{descricao}</p>
            <button className="produto-bot">Comprar</button>
        </div>
    )
}

export default ProdutoCard;