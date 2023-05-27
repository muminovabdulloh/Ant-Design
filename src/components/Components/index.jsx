import React from "react";
import { ComponentsWrapper, PathLink } from "./style";
import { sidebar } from "../../utils/sidebar";
import { Container } from "./style";
import Sidebar from "./../Sidebar";
import { Outlet } from "react-router-dom";

export const Generic = () => {
  return (
    <Container>
      <Sidebar/>
    </Container>
  );
};

export default Generic;
