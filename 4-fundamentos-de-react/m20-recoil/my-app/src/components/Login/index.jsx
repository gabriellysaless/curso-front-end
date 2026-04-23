import { useInput } from "../../hooks/useInput";
import userState from "../../state/user";
import { Form, Input, Botao } from "./styles";
import { useSetRecoilState } from "recoil";

function Login() {
    const nomeDoUsuario = useInput();

    const setUsuario = useSetRecoilState(userState);

    const handleLogin = (e) => {
        e.preventDefault();

        setUsuario({nome: nomeDoUsuario.valor, estaLogado: true})
    }
    return(
        <Form onSubmit={handleLogin}>
            <Input type="text"
            placeholder="Digite o nome de usuário"
            value={nomeDoUsuario.valor}
            onChange={nomeDoUsuario.onChange}
            />
            <Botao type="submit">Login</Botao>
        </Form>
    )
}

export default Login;