import React from "react";
import Card from "../Card";
import { CircularProgress } from "./circular_progress";
import { ProgressMaker } from "./prgrs";
import { LineBtn } from "./prgrs/style";
import {
  BasicWrapper,
  BtnsWrapper,
  Container,
  MinusBtn,
  PlusBtn,
  Wrapper,
} from "./style";

export class Progresses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lineProgress: 30,
    };
  }
  render() {
    const setLineProgress = (e) => {
      if (e.target.innerText === "+") {
        if (this.state.lineProgress < 100) {
          this.setState({ lineProgress: this.state.lineProgress + 10 });
        }
      } else {
        if (this.state.lineProgress >= 10) {
          this.setState({ lineProgress: this.state.lineProgress - 10 });
        }
      }
    };

    let circularProgress = 80;

    const setCircularPlus = (e) => {
      if (circularProgress <= 99) {
        circularProgress += 1;
        if (circularProgress < 30) {
          e.target.parentElement.parentElement.children[0].children[0].style.cssText = `
          background: conic-gradient(var(--dangerColor) ${
            circularProgress * 3.6
          }deg, #ededed 0deg);
          `;
          e.target.parentElement.parentElement.children[0].children[0].children[0].innerText = `${circularProgress}%`;
          e.target.parentElement.parentElement.children[0].children[0].children[0].style.color =
            "var(--dangerColor)";
        } else {
          e.target.parentElement.parentElement.children[0].children[0].style.cssText = `
          background: conic-gradient(#7d2ae8 ${
            circularProgress * 3.6
          }deg, #ededed 0deg);
          `;
          e.target.parentElement.parentElement.children[0].children[0].children[0].innerText = `${circularProgress}%`;
          e.target.parentElement.parentElement.children[0].children[0].children[0].style.color =
            "#7d2ae8";
        }
      }
    };
    const setCircularMinus = (e) => {
      if (circularProgress >= 3) {
        circularProgress -= 1;
        if (circularProgress < 30) {
          e.target.parentElement.parentElement.children[0].children[0].style.cssText = `
          background: conic-gradient(var(--dangerColor) ${
            circularProgress * 3.6
          }deg, #ededed 0deg);
          `;
          e.target.parentElement.parentElement.children[0].children[0].children[0].innerText = `${circularProgress}%`;
          e.target.parentElement.parentElement.children[0].children[0].children[0].style.color =
            "var(--dangerColor)";
        } else {
          e.target.parentElement.parentElement.children[0].children[0].style.cssText = `
          background: conic-gradient(#7d2ae8 ${
            circularProgress * 3.6
          }deg, #ededed 0deg);
          `;
          e.target.parentElement.parentElement.children[0].children[0].children[0].innerText = `${circularProgress}%`;
          e.target.parentElement.parentElement.children[0].children[0].children[0].style.color =
            "#7d2ae8";
        }
      }
    };
    return (
      <div>
        <Wrapper>
          <Container>
            <Card type="Basic" desc="Basic progress bar.">
              <ProgressMaker
                bgcolor="primary"
                progress="30"
                size="large"
                type="line"
              />
            </Card>
            <Card
              type="Type"
              desc="success, primary and info statuses."
            >
              <ProgressMaker
                bgcolor="success"
                progress="30"
                size="large"
                type="line"
              />
              <ProgressMaker
                bgcolor="primary"
                progress="50"
                size="large"
                type="line"
              />
              <ProgressMaker
                bgcolor="info"
                progress="70"
                size="large"
                type="line"
              />
            </Card>
            <Card
              type="Dynamic"
              desc="Dynamic progress bar"
            >
              <ProgressMaker
                bgcolor="primary"
                progress={`${this.state.lineProgress}`}
                size="large"
                type="line"
              />
              <LineBtn onClick={setLineProgress}>+</LineBtn>
              <LineBtn onClick={setLineProgress}>-</LineBtn>
            </Card>
          </Container>
          <Container>
            <Card
              type="Circular Progress"
              desc="Circular progress bar more colors"
            >
              <BasicWrapper>
                <CircularProgress color="var(--info)" size="small" info="68" />
                <CircularProgress
                  color="var(--warning)"
                  size="small"
                  info="100"
                />
                <CircularProgress color="darkgreen" size="small" info="76" />
              </BasicWrapper>
            </Card>
            <Card
              type="Circular Progress"
              desc="Circular progress bar value changeable"
            >
              <BasicWrapper>
                <CircularProgress size="large" info={circularProgress} />
              </BasicWrapper>
              <BtnsWrapper>
                <PlusBtn onClick={setCircularPlus}>+</PlusBtn>
                <MinusBtn onClick={setCircularMinus}>-</MinusBtn>
              </BtnsWrapper>
            </Card>
          </Container>
        </Wrapper>
      </div>
    );
  }
}


export default Progresses;
