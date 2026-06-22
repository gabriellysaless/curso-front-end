import { destinos } from "@/data/destinos";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./Destino.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DestinoPage({ params }: Props) {
  const { slug } = await params;

  const destino = destinos.find((item) => item.slug === slug)

  if (!destino){
    notFound();
  }

  return (
    <main className={styles.container}>
      <img
        src={destino.imagem}
        alt={`Imagem de ${destino.nome}`}
        className={styles.hero}
      />

      <div className={styles.content}>
        <h1 className={styles.title}>{destino.nome}</h1>

        <h2 className={styles.country}>{destino.pais}</h2>

        <p className={styles.description}>
          {destino.descricao}
        </p>

        <Link href="/destinos" className={styles.backButton}>
          ← Voltar para destinos
        </Link>
      </div>
    </main>
  )
}

