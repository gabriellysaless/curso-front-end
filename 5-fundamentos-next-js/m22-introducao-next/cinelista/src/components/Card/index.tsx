import { Filme } from "@/types/types";
import styles from "./Card.module.css";

type Props = {
    filme: Filme
}

const Card = ({filme} : Props) => {
    const {id, title, image, description} = filme /* Desestruturação para não precisar usar filme.algo */
    return (
        <div key={id} className={styles.card}>

            <img className={styles.poster} src={image} alt={`Imagem do filme ${title}`} width={300} height={200} />

            <div className={styles.info}>

                <h3 className={styles.title}>{title}</h3> 

                <p className={styles.description}>{description}</p>

            </div>
        </div>
    );
}

export default Card;