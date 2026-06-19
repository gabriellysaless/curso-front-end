import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Planeje sua próxima viagem</h1>
      <main className={styles.main}>
        <p>
          Que tal descobrir qual o seu próximo destino turístico? Acesse já nossa pagina de destinos e planeje sua próxima viagem!
        </p>
        <Link href="/destinos">Encontre seu próximo destino</Link>
      </main>
    </div>
  );
}
