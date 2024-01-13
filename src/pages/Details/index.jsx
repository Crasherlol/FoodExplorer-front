import {Container} from "./styles";
import {Header} from "../../components/Header";
import { Tag } from "../../components/Tag";
import {Footer} from "../../components/Footer"
import { Button } from "../../components/Button";
import { Amount } from "../../components/Amount";
import { SlArrowLeft } from 'react-icons/sl'
export function Details () {
    return(
        <Container>
        <Header />
        <div class="body"> 
        <div class="backButton">
         <button ><SlArrowLeft /> voltar</button>
        </div>
        <main>
        
            <img class="dishImage" src ="src/assets/Dish-1.png" />
            <div class="dishDescription">
                <h1>Salada Ravanello</h1>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
            
            <div class="tags">
            <Tag title="alface" />
            <Tag title="cebola" />
            <Tag title="pão naan" />
            <Tag title="pepino" />
            <Tag title="rabanete" />
            <Tag title="tomate" />
            </div>
            
            <div class="priceButtom">
            <Amount amount={1} />
            <Button>Incluir . R$ 25,00</Button>
            </div>
            </div>
        </main>
    </div>
        <Footer />
        </Container>
    )
}