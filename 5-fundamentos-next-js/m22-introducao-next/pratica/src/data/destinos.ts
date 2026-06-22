export interface Destino {
  id: number;
  nome: string;
  pais: string;
  descricao: string;
  imagem: string;
  slug:string;
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Rio de Janeiro",
    pais: "Brasil",
    descricao:
      "Conhecida como Cidade Maravilhosa, reúne praias famosas, vida noturna vibrante e pontos turísticos como o Cristo Redentor e o Pão de Açúcar.",
    imagem:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
      slug: "rio-de-janeiro",
  },
  {
    id: 2,
    nome: "Paris",
    pais: "França",
    descricao:
      "A capital francesa encanta com sua arquitetura histórica, museus renomados, gastronomia sofisticada e a icônica Torre Eiffel.",
    imagem:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      slug: "paris",
  },
  {
    id: 3,
    nome: "Tóquio",
    pais: "Japão",
    descricao:
      "Uma metrópole que combina tradição e tecnologia, oferecendo templos antigos, bairros futuristas e uma culinária mundialmente famosa.",
    imagem:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
      slug: "toquio",
  },
  {
    id: 4,
    nome: "Nova York",
    pais: "Estados Unidos",
    descricao:
      "Uma das cidades mais visitadas do mundo, com atrações como Times Square, Central Park, Broadway e a Estátua da Liberdade.",
    imagem:
      "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?auto=format&fit=crop&w=1200&q=80",
      slug: "nova-iorque",
  },
  {
    id: 5,
    nome: "Roma",
    pais: "Itália",
    descricao:
      "Berço de uma das maiores civilizações da história, abriga monumentos como o Coliseu, o Fórum Romano e a Fontana di Trevi.",
    imagem:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    slug: "roma",
  },
  {
    id: 6,
    nome: "Sydney",
    pais: "Austrália",
    descricao:
      "Famosa por sua bela baía, pela Sydney Opera House e pelas praias que atraem turistas de todas as partes do mundo.",
    imagem:
      "https://images.unsplash.com/photo-1523428461295-92770e70d7ae?auto=format&fit=crop&w=1200&q=80",
    slug: "sydney",
  },
];