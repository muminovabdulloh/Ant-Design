import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./style";
import {sidebar} from "./../../utils/sidebar"

export const Navbar = () => {
  return (
    <Container>
      {
         sidebar.map((value)=>(
          <NavLink key={value.id} to={value.path}>{value.title}</NavLink>
         ))
      }
    </Container>
  );
};

export default Navbar;
