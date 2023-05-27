import React from "react";
import { Container } from "./style";

const Dropdown = ({ children, type, ...res}) => {
  return <Container {...res}>{children}</Container>;
};

export default Dropdown;
