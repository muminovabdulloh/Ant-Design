import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";
import Sidebar from "./../Sidebar";

export const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <Sidebar />
      {/* <h1>Generic {location.pathname} Component</h1> */}
    </Container>
  );
};

export default Generic;
