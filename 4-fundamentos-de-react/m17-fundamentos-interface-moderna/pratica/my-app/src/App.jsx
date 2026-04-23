import { useEffect, useState } from "react"
import ProdutoCard from "./components/ProdutoCard/ProdutoCard"
import "./styles/global.css"

const API_URL = 'https://crudcrud.com/api/d91f4023b30648b392db5f179c0bad17/produtos'

function App() {

  const [produtos, setProdutos] = useState([]);

  const [novoProduto, setNovoProduto] = useState ("");
  const [novaImagem, setNovaImagem] = useState("");
  const [novoValor, setNovoValor] = useState ("");
  const [novaDesc, setNovaDesc] = useState ("");

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(dados =>setProdutos(dados))
    .catch(error => console.error("Erro ao buscar produtos:", error))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(novoProduto.trim() === '') return;

    const novo = {
      nome: novoProduto.trim(),
      imagem: novaImagem.trim(),
      preco: novoValor.trim(),
      descricao: novaDesc.trim()
    }
    fetch(API_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(novo)
    })
    .then(res => res.json())
    .then(produtoCriado => {
      setProdutos([...produtos, produtoCriado]);
      setNovoProduto('');
      setNovaImagem('');
      setNovoValor('');
      setNovaDesc('');
    })
    
    .catch(error => console.error("Erro ao buscar tarefas:", error))
    
  }

  return (
    <>
      <h1>Catálogo de Produtos</h1>
      <div className="container-formulario">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nome do novo produto"
            value={novoProduto}
            onChange={(e) => setNovoProduto(e.target.value)}
          />
          <input type="text" placeholder="Link da imagem do produto"
            value={novaImagem}
            onChange={(e) => setNovaImagem(e.target.value)}
          />
          <input type="text" placeholder="Valor do novo produto"
            value={novoValor}
            onChange={(e) => setNovoValor(e.target.value)}
          />
          <input type="text" placeholder="Descrição do novo produto"
            value={novaDesc}
            onChange={(e) => setNovaDesc(e.target.value)}
          />
          <button type="submit">Enviar</button> {/* Lembrar de colocar type="submit" se não dá erro */}
        </form>
      </div>
      <div className="container-produtos">
        {produtos.map(produto => (
          <ProdutoCard
            key={produto._id}
            nome={produto.nome}
            imagem={produto.imagem}
            preco={produto.preco}
            descricao={produto.descricao}
          />
        ))}
      </div>
    </>
  )
}

export default App
