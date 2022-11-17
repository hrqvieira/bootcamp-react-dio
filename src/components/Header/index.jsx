import React from "react";
import logo from "../../assets/logo-dio 1.png";
import {
  BuscarInputContainer,
  Columnl,
  Wrapper,
  Menu,
  MenuRight,
  UserPicture,
  Input,
  Container,
  Row,
} from "./styles";
import { Button } from "../Buttom";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da DIO"/>
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/101282282?v=4" />
          ) : (
            <>
              <MenuRight href="/#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastar" />
              </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
