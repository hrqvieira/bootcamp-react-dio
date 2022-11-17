
import { Navigate, useNavigate } from 'react-router-dom'

import { Button } from "../../components/Buttom";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import bannerImage from "../../assets/image 1.png";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate('/login')
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente <br />
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title="Começar agora" variant="secondary" onClick={handleClickSingIn} />
        </div>
        <div>
          <img src={bannerImage} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
