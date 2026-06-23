import Grid from "@/components/Grid";
import Title from "@/components/Title"
import { getPopular } from "@/lib/api/tmdb";

export const revalidate = 60; // atualiza a cada 60s
/* 
    Meio termo:
    Faz chamada na API, mas não chame toda hora, ou seja, guarde um cash por determinado tempo
*/

const FilmesPopulares = async () => {
    const filmes = await getPopular();

    return (
        <>
            <Title title="Filmes Populares" />
            <Grid filmes={filmes}/>
        </>
    );
}
export default FilmesPopulares;