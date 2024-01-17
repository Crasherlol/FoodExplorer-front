import { Container } from "./styles";
import { Input } from "../Input";
import {Button} from "../Button"
import { BsReceiptCutoff } from "react-icons/bs";
import { PiSignOutLight } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import {useAuth} from "../../hooks/auth"

export function Header (){
    const {signOut} = useAuth();
    return(
        <Container>
    
    <h2> <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" viewBox="0 0 27 30" fill="none">
    <path d="M13.5391 0L26.5294 7.5V22.5L13.5391 30L0.548681 22.5V7.5L13.5391 0Z" fill="#065E7C"/>
    </svg> Food Explorer</h2>
    <Input placeholder="Busque por pratos ou ingredientes" icon={IoSearch} />
    <Button>  <BsReceiptCutoff class="receiptIcon"/> Pedidos (0) </Button>
    <button class="signOutButton" onClick={signOut}> <PiSignOutLight/> </button>
    
        </Container>
    )
}