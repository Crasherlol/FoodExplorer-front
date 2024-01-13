import { Container, Banner } from "./styles"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
export function Home (){

  return (
    <Container>
      <Header />
      <Banner>
      <div class="bannerDiv">
        <img src ="src/assets/Banner.png" class="bannerImage"></img>
        <div class="bannerText">
        <h1> Sabores inigualáveis! </h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
        </div>
      </Banner>
      <h2>Refeições</h2>
      <Footer />
    </Container>
  )
}