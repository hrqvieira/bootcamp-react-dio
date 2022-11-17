import { Header } from "../../components/Header";
import { Container, Column, Title, TitleHighlight } from "./styles";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome=" Henrique  Henrique"
            image="https://avatars.githubusercontent.com/u/101282282?v=4"
          />
          <UserInfo
            percentual={20}
            nome=" Henrique  Henrique"
            image="https://avatars.githubusercontent.com/u/101282282?v=4"
          />
          <UserInfo
            percentual={10}
            nome=" Henrique  Henrique"
            image="https://avatars.githubusercontent.com/u/101282282?v=4"
          />
          <UserInfo
            percentual={60}
            nome=" Henrique  Henrique"
            image="https://avatars.githubusercontent.com/u/101282282?v=4"
          />
          <UserInfo
            percentual={90}
            nome=" Henrique  Henrique"
            image="https://avatars.githubusercontent.com/u/101282282?v=4"
            />  
            </Column>
      </Container>
    </>
  );
};

export { Feed };
