import { Container, Body } from "./styles";
import { SlArrowLeft } from 'react-icons/sl'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Tag } from "../../components/Tag";
import { PiUploadSimple} from 'react-icons/pi'
export function AddDish(){
    return (
        <Container>
            <Header />
        <Body >
            <div class="backButton">
            <button ><SlArrowLeft /> voltar</button>
            </div>
            <fieldset>
                <legend> <h1>Adicionar prato </h1> </legend>
            
            <form class="newDish">
                <div class="firstLine">
                    <div class="inputImage">
                    <label>Imagem do prato</label>
                    <button class="inputButton" type="button">
                    <>
                    <PiUploadSimple />
                    <label for="file">Selecione uma imagem</label>                     
                    </>
                    </button>
                    <Input id="file" type="file" hidden></Input>
    
                    </div>
                 <div class="inputName">
                    <label>Nome</label>
                    <Input placeholder="Ex: Salada Ceaser" class="inputNamebar"></Input>
                    </div> 
                  <div class="cartegory">
                     <label>Cartegoria</label>
                     <div>
                        <select class="setCartegory">
                          <option> Refeições </option>  
                          <option> Sobremesas </option>  
                          <option> Bebidas </option>  
                        </select>
                     </div>
                  </div>  
                </div>

                <div class="secondLine">
                    
                    <div class="ingredientTags">
                        <NoteItem value="pão naan" />
                    </div>
                    <div class="price">
                        <label>Preço</label>
                        <Input placeholder="R$ 00,00" type="number"/>
                    </div>
                </div>
                <div class="thidLine">
                    <div class="textArea">
                        <label>Descrição</label>
                        <textarea class="dishDescription" typeof="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição " />
                    </div>
                </div>
                <div class="saveButton">
                <Button class="button"> Salvar alterações</Button>
                </div>
            </form>
            </fieldset>
            
        </Body>
        <Footer />
        </Container>
    )
}