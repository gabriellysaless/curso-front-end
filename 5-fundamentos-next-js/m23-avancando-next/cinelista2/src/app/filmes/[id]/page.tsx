import { filmes } from "@/lib/filmes";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetalheFilme.module.css";

type Props = {
    params: Promise<{
        id: number
    }>
}

const DetalheFilme = async ({params}: Props) => {
const { id } = await params

const filme = filmes.find((filme) => filme.id == id)

if(!filme){
    notFound();
}

const { title, image, description } = filme

    return (
        <div className={styles.details}>
            <div className={styles.container}>
                <Link href="/" className={styles.voltar}>Voltar</Link>
                <section>
                    <figure>
                        <img className={styles.image} src={image} alt={`Poster do filme ${title}`} />
                    </figure>
                    <article className={styles.info}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </article>
                </section>
            </div>
        </div>
    )
}

export default DetalheFilme