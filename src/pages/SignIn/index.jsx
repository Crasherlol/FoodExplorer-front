import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){
    return(
    <Container>
    <h1> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
    <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
    </svg> food explorer</h1>
    <Form>
        <h1>Faça login</h1>
        <label>Email</label>
        <Input type="text" placeholder="Exemplo: exemplo@email.com" />
        <label>Senha</label>
         <Input type="password" placeholder="No mínimo 6 caracteres" />
         <Button> Entrar </Button>
         <button class="createAccount">Criar uma conta</button>
    </Form>
    </Container>
    );
}