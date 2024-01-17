import { Container, Body } from "./styles";
import { SlArrowLeft } from 'react-icons/sl'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { PiUploadSimple} from 'react-icons/pi'
import { useState } from "react";
import { api } from "../../services/api";
export function AddDish(){
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState([]);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [cartegory, setCartegory] = useState("");
    const [image, setImage] = useState(null);

    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
    }

    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    function handleImage(e) {
        if (!e.target.files){
            return
        }

        setImage(e.target.files[0])  
        console.log(e.target.files[0])
    }
    function test (){
        const objetoTest = {
            title,
            price,
            description,
            cartegory,
            image,
            ingredients
        }
        console.log(objetoTest)
    }

    async function newDish(){
        await api
        .post('/dishes', {
            title,
            description,
            image,
            price,
            cartegory,
            ingredients,
        })
        .then(alert('Prato cadastrado com sucesso'))
        .catch((error) => {
            if (error.response){
                alert(error.response.message)
            } else {
                alert('Não foi possivel cadastrar o prato')
            }
        })


    }


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
                    <Input id="file" type="file" hidden onChange={handleImage}></Input>
    
                    </div>
                 <div class="inputName">
                    <label>Nome</label>
                    <Input placeholder="Ex: Salada Ceaser" class="inputNamebar" onChange={e => setTitle(e.target.value)}></Input>
                    </div> 
                  <div class="cartegory">
                     <label>Cartegoria</label>
                     <div>
                        <select class="setCartegory" onChange={e => setCartegory(e.target.value)}>
                            <option value="placeholder">Selecione uma cartegoria</option>
                          <option value="Refeição"> Refeições </option>
                          <option value="Sobremesa"> Sobremesas </option>  
                          <option value="Bebida"> Bebidas </option>  
                        </select>
                     </div>
                  </div>  
                </div>

                <div class="secondLine">
                 <div class="ingredientTags">
                    {
                        ingredients.map((ingredient, index) => (
                          <NoteItem 
                          key={String(index)}
                          value={ingredient}
                          onClick={() => handleRemoveIngredient(ingredient)}  />
                        ))
                        
                    }

                    <NoteItem 
                    isNew 
                     placeholder="Novo ingrediente"
                     onChange={e => setNewIngredient(e.target.value)}
                     value={newIngredient}
                     onClick={handleAddIngredient}
                     />
                    </div>

                    <div class="price">
                        <Input placeholder="R$ 00,00" type="number" onChange={e => setPrice(e.target.value)}/>
                    </div>

                </div>
                <div class="thidLine">
                    <div class="textArea">
                        <label>Descrição</label>
                        <textarea class="dishDescription" typeof="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição " onChange={e => setDescription(e.target.value)} />
                    </div>
                </div>
                <div class="saveButton">
                <Button class="button" onClick={newDish}> Salvar alterações</Button>
                </div>
            </form>
            </fieldset>
            
        </Body>
        <Footer />
        </Container>
    )
}