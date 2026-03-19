import { useContext } from "react";
import { useInput } from "../hooks/useInput";
import { UserContext } from "../contexts/UserContext";


function Login() {
    const nomeDoUsuario = useInput();

    const {setUsuario} = useContext(UserContext);

    const handleLogin = (e) => {
        e.preventDefault();

        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true})
    }
    return(
        <form onSubmit={handleLogin}>
            <input type="text"
            placeholder="Digite o nome de usuário"
            value={nomeDoUsuario.valor}
            onChange={nomeDoUsuario.onChange}
            />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;