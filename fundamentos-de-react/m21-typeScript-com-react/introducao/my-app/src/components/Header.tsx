type HeaderPros = {
    texto: string
};

const Header = ({ texto } : HeaderPros) => {
    return(
        <h1>{texto}</h1>
    )
};

export default Header;