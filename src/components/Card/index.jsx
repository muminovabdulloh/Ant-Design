import React from "react";
import { Body, Container, Footer, FooterIcon, Header } from "./style";
import copy from "./../../assets/icons/copy.png";
import code from "./../../assets/icons/code.png";
import telegram from "./../../assets/icons/telegram.png";

export const Card = ({ type = "Unknown", children, description, footer }) => {
  return (
    <Container>
      <Header>{children}</Header>
      <Body>
        <legend>{type}</legend>
          There are primary button, default button, dashed button, text button
          and link button in antd.
      </Body>
      <Footer>
        <a href="https://t.me/abdulloh021">
          <FooterIcon src={telegram}/>
        </a>
        <a href="#">
          <FooterIcon src={copy}/>
        </a>
        <a href="#">
          <FooterIcon src={code}/>
        </a>
      </Footer>
    </Container>
  );
};

export default Card;
