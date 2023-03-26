import React from "react";

import { navbar } from "./../../utils/navbar";
import {
  Container,
  Link,
  Contact,
  LinkWrapper,
  TitleLink,
  Wrapper,
  List,
} from "./style";

export const Navbar = () => {
  return (
    <Container>
      <TitleLink title to="/components">
        AntD Library
      </TitleLink>
      <Wrapper>
        <List>
          {navbar.map((value) => (
            <Link key={value.id} to={value.path}>
              {value.title}
            </Link>
          ))}
        </List>
        <Contact>
          <Contact.UserName>Mo'minov Abdulloh</Contact.UserName>
          <a href="https://t.me/abdulloh021">
            <Contact.Telegram />
          </a>
          <a href="https://github.com/muminovabdulloh">
            <Contact.GitHub />
          </a>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
