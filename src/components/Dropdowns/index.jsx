import React from "react";
import { Container } from "./style";
import Card from "./../Card";
import Dropdown from "./Dropdown";
import arrow from "./../../assets/icons/arrow.png"


export const Dropdowns = () => {
  const click = ()=>{
    const item = document.querySelector(".item");
  }
  return (
    <Container>
      <div>
      <Card type="Simple Dropdown">
      <Dropdown>
        <p>Hover Me </p>
        <img src={arrow} alt="" />
        <div>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </div>
      </Dropdown>
      </Card>
      <Card type="Simple Dropdown">
      <Dropdown >
        <p>Hover Me </p>
        <img src={arrow} alt="" />
        <div>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </div>
      </Dropdown>
      </Card>
      </div>
      <div>
      <Card type="Hover and Select">
      <Dropdown>
        <p>Hover Me </p>
        <img src={arrow} alt="" />
        <div>
          <p>Menu Item 1</p>
          <p>Menu Item 2</p>
          <p>Menu Item 3</p>
        </div>
      </Dropdown>
      </Card>
      </div>
    </Container>      
    );
};

export default Dropdowns;
