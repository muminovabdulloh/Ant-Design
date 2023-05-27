import React from "react";
import { Container } from "./style";
import Card from "./../Card";
import Button from "./Button";
import download from "./../../assets/icons/download.png";
import search from "./../../assets/icons/search.png";

export const Buttons = () => {
  return (
    <Container>
      <div>
        <Card type="Normal">
          <Button btnType="normal" btnColor="primary">
            Primary
          </Button>
          <Button btnType="normal" btnColor="secondary">
            Secondary Button
          </Button>
          <Button btnType="normal" btnColor="info">
            Info Button
          </Button>
          <Button btnType="normal" btnColor="success">
            Success Button
          </Button>
          <Button btnType="normal" btnColor="warning">
            Warning Button
          </Button>
          <Button btnType="normal" btnColor="danger">
            Danger Button
          </Button>
          <Button btnType="normal" btnColor="text">
            Text Button
          </Button>
          <Button btnType="normal" btnColor="link">
            Link Button
          </Button>
        </Card>
        <Card type="Dashed">
          <Button btnType="dashed" btnColor="dashed">
            Dashed
          </Button>
          <Button btnType="dashed" btnColor="secondary">
            Secondary Button
          </Button>
          <Button btnType="dashed" btnColor="info">
            Info Button
          </Button>
          <Button btnType="dashed" btnColor="success">
            Success Button
          </Button>
          <Button btnType="dashed" btnColor="warning">
            Warning Button
          </Button>
          <Button btnType="dashed" btnColor="danger">
            Danger Button
          </Button>
        </Card>
        <Card type="Block">
          <Button btnType="block" btnColor="primary">
            Primary Button
          </Button>
          <Button btnType="block" btnColor="secondary">
            Secondary Button
          </Button>
          <Button btnType="block" btnColor="info">
            Info Button
          </Button>
          <Button btnType="block" btnColor="success">
            Success Button
          </Button>
          <Button btnType="block" btnColor="warning">
            Warning Button
          </Button>
          <Button btnType="block" btnColor="danger">
            Danger Button
          </Button>
          <Button btnType="block" btnColor="link">
            Link Button
          </Button>
          <Button btnType="block" btnColor="text">
            Text Button
          </Button>
        </Card>
      </div>
      <div>
        <Card type="Download">
          <Button btnType="icon" btnColor="primary">
            <img src={download} alt="" />
            Download
          </Button>
          <Button
            shape="square"
            borderRadius="10px"
            btnType="square-icon"
            btnColor="primary"
          >
            <img src={download} alt="" />
          </Button>
          <Button
            shape="square"
            borderRadius="15px"
            btnType="square-icon"
            btnColor="primary"
          >
            <img src={download} alt="" />
          </Button>
          <Button
            shape="square"
            borderRadius="30px"
            btnType="square-icon"
            btnColor="primary"
          >
            <img src={download} alt="" />
          </Button>
        </Card>
        <Card type="Search">
          <Button btnType="icon" btnColor="primary">
            <img src={search} alt="" />
            Search
          </Button>
          <Button
            shape="square"
            borderRadius="10px"
            btnType="square-icon"
            btnColor="primary"
          >
            <img src={search} alt="" />
          </Button>
          <Button
            shape="square"
            borderRadius="15px"
            btnType="square-icon"
            btnColor="primary"
          >
            <img src={search} alt="" />
          </Button>
          <Button
            shape="square"
            borderRadius="50%"
            btnType="square-icon"
            btnColor="primary"
          >
            <img src={search} alt="" />
          </Button>
        </Card>
        <Card type="Loading">
          <Button btnType="icon" btnColor="primary">
            <div className="spinner"></div>
            Loading
          </Button>
          <Button shape="square" borderRadius="15px" btnType="icon" btnColor="primary">
            <div className="spinner"></div>
            Loading
          </Button>
          <Button borderRadius="50%" btnType="square-icon" btnColor="primary">
            <div className="spinner"></div>
          </Button>
        </Card>
      </div>
    </Container>
  );
};

export default Buttons;
