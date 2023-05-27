import React from "react";
import Card from "../Card";
import { Container, DisabledBtn, Wrapper } from "./style";
import { Switch } from "./Switch";

export const Switches = () => {
  let disabled = 0;
  const toggleSwitchLarge = (e) => {
    if (e.target.children[1].style.transform === "translateX(24px)") {
      e.target.children[1].style.transform = "translateX(0)";
      e.target.style.backgroundColor = "#6c757dbf";
    } else {
      e.target.children[1].style.transform = "translateX(24px)";
      e.target.style.backgroundColor = "#007bff";
    }
  };
  const toggleSwitchMedium = (e) => {
    if (e.target.children[1].style.transform === "translateX(16px)") {
      e.target.children[1].style.transform = "translateX(0)";
      e.target.style.backgroundColor = "#6c757dbf";
    } else {
      e.target.children[1].style.transform = "translateX(16px)";
      e.target.style.backgroundColor = "#007bff";
    }
  };
  const toggleSwitchSmall = (e) => {
    if (e.target.children[1].style.transform === "translateX(10px)") {
      e.target.children[1].style.transform = "translateX(0)";
      e.target.style.backgroundColor = "#6c757dbf";
    } else {
      e.target.children[1].style.transform = "translateX(10px)";
      e.target.style.backgroundColor = "#007bff";
    }
  };
  const disableBtn = (e) => {
    if (disabled) {
      e.target.parentElement.children[0].style.cssText = `
      opacity: 1;
      pointer-events: unset;
     `;
      disabled -= 1;
    } else {
      e.target.parentElement.children[0].style.cssText = `
      opacity: 0.5;
      pointer-events: none;
     `;
      disabled += 1;
    }
  };
  return (
    <>

      <Wrapper>
        <Container>
          <Card
            type="Basic"
            desc={"basic switch accepts size, bgChecked, bgNotChecked props"}
          >
            <div>
              <Switch onClick={toggleSwitchMedium} size="medium" />
            </div>
          </Card>
          <Card
            type="Disabled"
            desc={"disabled switch accepts size, bgChecked, bgNotChecked props"}
          >
            <div>
              <Switch onClick={toggleSwitchLarge} size="large" />
              <DisabledBtn onClick={disableBtn}>Disabled</DisabledBtn>
            </div>
          </Card>
        </Container>
        <Container>
          <Card
            type="1 and 0"
            desc={"1 and 0 switch accepts size, bgChecked, bgNotChecked props"}
          >
            <div>
              <Switch
                leftInfo="1"
                rightInfo="0"
                onClick={toggleSwitchMedium}
                size="medium"
              />
            </div>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};



export default Switches;