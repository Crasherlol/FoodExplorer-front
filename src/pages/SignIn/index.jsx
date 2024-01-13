import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function SignIn(){
    const navigate = useNavigate();
    const {signIn} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignIn(){
        signIn({email, password})
    }
    return(
    <Container>
    <h1> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
    <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
    </svg> food explorer</h1>
    <Form>
        <h1>Faça login</h1>

        <label>Email</label>
        <Input type="text" 
        placeholder="Exemplo: exemplo@email.com" 
        onChange={e => setEmail(e.target.value)}
        />

        <label>Senha</label>
         <Input type="password" 
         placeholder="No mínimo 6 caracteres" 
         onChange={e => setPassword(e.target.value)}
         />

         <Button onClick={handleSignIn}> Entrar </Button>
         <button class="createAccount" onClick={() => navigate("/register")}>Criar uma conta</button>
    </Form>
    </Container>
    );
}