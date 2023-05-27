import React from "react";
import { Container } from "./style";

const Button = ({ children, type, ...res}) => {
  return <Container {...res}> {children}</Container>;
};

export default Button;
