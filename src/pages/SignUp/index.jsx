import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {useState} from "react";
import {api} from "../../services/api";
import { useNavigate } from "react-router-dom";

export function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleSignUp(){
        if (!name || !email || !password){
           return alert("Preencha todos os campos!")
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso")
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            } else {
                alert ("Não foi possivel cadastrar")
            }
        })
        navigate('/')
    }

    return(
    <Container>
    <h1> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
    <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
    </svg> food explorer</h1>
    <Form>
        <h1>Crie sua conta</h1>

        <label>Seu nome</label>
        <Input type="text"
         placeholder="Exemplo: Maria da Silva" 
         onChange={e => setName(e.target.value)}
         />

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

         <Button onClick={handleSignUp}> Criar conta </Button>
         <button class="createAccount" onClick={() => navigate('/')}>Ja tenho uma conta</button>

    </Form>
    </Container>
    );
}