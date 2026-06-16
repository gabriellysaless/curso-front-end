import Link from "next/link";

const Header = () => {
    return(
        <header>
            <Link href="/">
                <h1>Cinelista</h1>
            </Link>
            <nav>
                <Link href="/">Início</Link>
                <Link href="/filmes/em-alta">Em alta</Link>
                <Link href="/filmes/populares">Populares</Link>
                <Link href="/filmes/top-filmes">Top Filmes</Link>
            </nav>
        </header>
    );
}
export default Header;