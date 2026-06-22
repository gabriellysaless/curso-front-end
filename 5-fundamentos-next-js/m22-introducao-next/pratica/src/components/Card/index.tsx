import { Destino } from "@/data/destinos";
import styles from "./Card.module.css";
import Link from "next/link";

type Props = {
    destino: Destino
}

const Card = ({destino}: Props) => {
    const { id, nome, pais, imagem, slug } = destino
    return (
        <div key={id} className={styles.card}>
            <img src={imagem} alt={`Foto de ${nome}`} className={styles.img}/>
            <div>
                <h2 className={styles.title}>{nome}</h2>
                <p className={styles.country}>{pais}</p>
                <button className={styles.btn}>
                    <Link
                        key={id}
                        href={`/destinos/${slug}`}
                    >
                        Saiba mais!
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Card;