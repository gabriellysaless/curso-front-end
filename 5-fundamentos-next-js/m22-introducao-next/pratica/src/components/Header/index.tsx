import Link from "next/link";
import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <Link href="/">Portal de Viagens</Link>
            </h1>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/destinos">Destinos</Link>
            </nav>
        </header>
    )
}

export default Header;