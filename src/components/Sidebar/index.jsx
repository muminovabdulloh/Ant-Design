import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Body, Container, Wrapper, Link } from "./style";
import { sidebar } from "./../../utils/sidebar";

export const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        {sidebar.map((value) => (
          <Link key={value.id} to={value.path}>
            {value.title}
          </Link>
        ))}
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
