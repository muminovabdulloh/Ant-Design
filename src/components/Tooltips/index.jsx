import React from "react";
import Card from "../Card";
import { Container, MiddleTooltipWrapper,TopTooltipWrapper, TooltSizesWrapper, Wrapper } from "./style";
import { ToolTip } from "./Tooltip";

export const Tooltips = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Card type="Basic Text" desc={"Basic hover tooltip with text"}>
              <ToolTip size="medium">Tooltip</ToolTip>
          </Card>
          <Card type="Tooltip with Background Color" desc={"Basic hover tooltip with text"}>
          <ToolTip toolBgColor="green" border size="medium">Green</ToolTip>
          <ToolTip toolBgColor="blue" border size="medium">Blue</ToolTip>
          <ToolTip toolBgColor="red" border size="medium">Red</ToolTip>
          <ToolTip toolBgColor="black" border size="medium">Black</ToolTip>
          <ToolTip toolBgColor="yellow" border size="medium">Yellow</ToolTip>
          <ToolTip toolBgColor="pink" border size="medium">Pink</ToolTip>
          <ToolTip toolBgColor="orange" border size="medium">Orange</ToolTip>
          <ToolTip toolBgColor="brown" border size="medium">Brown</ToolTip>
          <ToolTip toolBgColor="aqua" border size="medium">Aqua</ToolTip>
          <ToolTip toolBgColor="orchid" border size="medium">Orchid</ToolTip>
          <ToolTip toolBgColor="gold" border size="medium">Gold</ToolTip>
          <ToolTip toolBgColor="magenta" border size="medium">Magenta</ToolTip>
          <ToolTip toolBgColor="chocolate" border size="medium">Chocolate</ToolTip>
          </Card>
        </Container>
        <Container>
          <Card type="Placement" desc={"Basic hover tooltip with text"}>
            <TopTooltipWrapper>
              <ToolTip border size="large">Top</ToolTip>
              <ToolTip border size="large">Top</ToolTip>
              <ToolTip border size="large">Top</ToolTip>
            </TopTooltipWrapper>
            <MiddleTooltipWrapper>
              <ToolTip toolPos="right" border size="large">Right </ToolTip>
              <ToolTip toolPos="left" border size="large">Left</ToolTip>
            </MiddleTooltipWrapper>
            <MiddleTooltipWrapper>
              <ToolTip toolPos="right" border size="large">Right</ToolTip>
              <ToolTip toolPos="left" border size="large">Left</ToolTip>
            </MiddleTooltipWrapper>
            <TopTooltipWrapper>
              <ToolTip toolPos="bottom" border size="large">Bottom</ToolTip>
              <ToolTip toolPos="bottom" border size="large">Bottom</ToolTip>
              <ToolTip toolPos="bottom" border size="large">Bottom</ToolTip>
            </TopTooltipWrapper>
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};



export default Tooltips;
