import React from "react";
import Card from "../Card";
import { Checkbox } from "./Checkbox";
import { BasicWrapper, Container, Wrapper } from "./style";

export const Checkboxes = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Card
            type="Basic"
            desc={"default props with differnt size and lableText"}
          >
            <Checkbox checked text="Basic" size="medium" />
          </Card>
          <Card
            type="With Color"
            desc={"default props with differnt size and lableText"}
          >
            <BasicWrapper>
              <Checkbox text="Large" size="large" />
              <Checkbox text="Medium" size="medium" />
              <Checkbox checked text="small" size="small" />
            </BasicWrapper>
          </Card>
        </Container>
        <Container>
          <Card
            type="Disabled"
            desc={"default props with differnt size and lableText"}
          >
            <Checkbox disabledCheckbox="true" text="Disabled" size="medium" />
          </Card>
        </Container>
      </Wrapper>
    </>
  );
};

export default Checkboxes;
