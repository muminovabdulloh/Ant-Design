import React from "react";
import { Container } from "./style";
import Card from "./../Card";
import Input from "./Input";
import User from "./../../assets/icons/user.png";
import { Label } from "./Input/style";


export const Inputs = () => {
  return (
    <Container>
      <div>
      <Card type="Default">
        <Input placeholder="Basic Usage"/>
      </Card>
      <Card type="Normal Danger">
        <Input inputColor="danger" inputSize="large" placeholder="Normal Danger Large"/>
        <Input inputColor="danger" inputSize="medium" placeholder="Normal Danger Medium"/>
        <Input inputColor="danger" inputSize="small" placeholder="Normal Danger Small"/>
      </Card>
      <Card type="Normal Warning">
        <Input inputColor="warning" inputSize="large" placeholder="Normal Warning Large"/>
        <Input inputColor="warning" inputSize="medium" placeholder="Normal Warning Medium"/>
        <Input inputColor="warning" inputSize="small" placeholder="Normal Warning Small"/>
      </Card>
      <Card type="Normal Disabled">
        <Input disabled inputSize="large" placeholder="Normal Large Disabled"/>
        <Input disabled inputSize="medium" placeholder="Normal Medium Disabled"/>
        <Input disabled inputSize="small" placeholder="Normal Small Disabled"/>
      </Card>
      <Card type="Normal Input with Icon">
        <Label>
          <img src={User} alt="" />
          <Input inputSize="large" placeholder="Normal Input with Icon"/>
        </Label>
        <Label>
          <img src={User} alt="" />
          <Input inputSize="medium" placeholder="Normal Input with Icon"/>
        </Label>
        <Label>
          <img src={User} alt="" />
          <Input inputSize="small" placeholder="Normal Input with Icon"/>
        </Label>
      </Card>
      </div>
      <div>
      <Card type="Three size of Input">
        <Input inputSize="large" placeholder="Large Size"/>
        <Input inputSize="medium" placeholder="Medium Size"/>
        <Input inputSize="small" placeholder="Small Size"/>
      </Card>
      <Card type="Normal Primary">
        <Input inputColor="primary" inputSize="large" placeholder="Normal Primary Large"/>
        <Input inputColor="primary" inputSize="medium" placeholder="Normal Primary Medium"/>
        <Input inputColor="primary" inputSize="small" placeholder="Normal Primary Small"/>
      </Card>
      <Card type="Normal Secondary">
        <Input inputColor="secondary" inputSize="large" placeholder="Normal Secondary Large"/>
        <Input inputColor="secondary" inputSize="medium" placeholder="Normal Secondary Medium"/>
        <Input inputColor="secondary" inputSize="small" placeholder="Normal Secondary Small"/>
      </Card>
      <Card type="Normal Success">
        <Input inputColor="success" inputSize="large" placeholder="Normal Success Large"/>
        <Input inputColor="success" inputSize="medium" placeholder="Normal Success Medium"/>
        <Input inputColor="success" inputSize="small" placeholder="Normal Success Small"/>
      </Card>
      <Card type="Input with numbers">
        <Input inputColor="primary" inputSize="large" placeholder="Integer Primary Large" type="number"/>
        <Input inputColor="info" inputSize="medium" placeholder="Integer Info Medium" type="number"/>
        <Input inputColor="success" inputSize="small" placeholder="Integer Success Small" type="number"/>
        <Input inputColor="warning" inputSize="small" placeholder="Integer Warning Small" type="number"/>
        <Input inputColor="danger" inputSize="small" placeholder="integer Danger Small" type="number"/>
      </Card>
      </div>
    </Container>      
    );
};

export default Inputs;
