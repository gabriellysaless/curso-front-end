import Grid from "@/components/Grid";
import Title from "@/components/Title"
import { getTopRated } from "@/lib/api/tmdb";

export const dynamic = 'force-static';
/* 
    Página estática é gerada e uma nova só é gerada novamente no próximo build
    Usado para páginas que quase não sofrem mudanças
*/

const TopFilmes = async () => {
    const filmes = await getTopRated();

    return (
        <>
            <Title title="Top Filmes" />
            <Grid filmes={filmes}/>
        </>
    );
}
export default TopFilmes;