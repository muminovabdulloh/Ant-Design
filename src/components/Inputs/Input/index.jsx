import React from "react";
import { Container } from "./style";

const Input = ({ children, type, ...res}) => {
  return <Container {...res}/>;
};

export default Input;
