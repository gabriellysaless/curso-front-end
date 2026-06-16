import { Filme } from "@/types/types";

type Props = {
    filme: Filme
}

const Card = ({filme} : Props) => {
    const {id, title, image, description} = filme /* Desestruturação para não precisar usar filme.algo */
    return (
        <div key={id}>
            <img src={image} alt={`Imagem do filme ${title}`} width={300} height={200} />
            <div>
                <h1>{title}</h1> 
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;