import CardProduto from "./components";
import { Container } from "./components/styles";

function App() {

  const produtos = [
    {
      id: 1,
      nome: "Câmera",
      descricao: "Câmera analógica",
      preco: "R$ 599,90",
      imagem: "https://images.pexels.com/photos/2508735/pexels-photo-2508735.jpeg"
    }
  ]

  return (
    <>
      <h1>Nossos Produtos</h1>
      <Container>
        {produtos.map(produto => <CardProduto key={produto.id} produto={produto}/>)}
      </Container>
    </>
  )
}

export default App;
