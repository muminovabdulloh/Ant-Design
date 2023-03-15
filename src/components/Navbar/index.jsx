import React from "react";
import {navbar} from "./../../utils/navbar";
import { NavLink } from "react-router-dom";
import { Container } from "./style";

export const Navbar = () => {
  return (
    <Container>
      {
         navbar.map((value)=>(
          <NavLink key={value.id} to={value.path}>{value.title}</NavLink>
         ))
      }
    </Container>
  );
};

export default Navbar;
