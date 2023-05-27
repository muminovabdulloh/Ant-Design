import React from "react";
import Card from "../Card";
import { Badge } from "./Badge";
import {
  BadgeESumButton,
  StdAlone,
  Container,
  Wrapper
} from "./style";

import ClockIcon from "../../assets/icons/badge_clock.svg";
import FaceBookIcon from "../../assets/icons/badge_fackbook.svg";
import GitHubIcon from "../../assets/icons/badge_github.svg";
import ChromeIcon from "../../assets/icons/badge_chrome.svg";

export class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countMin: 1,
      countMax: 90,
    };
  }

  render() {
    const setCount = ({ target }) => {
      if (this.state.countMax >= 99) {
        this.setState({
          countMax: "99+",
        });
      }
      if (target.name === "min") {
        if (this.state.countMin >= 1) {
          this.setState({
            countMin:
              target.innerText === "+"
                ? this.state.countMin + 1
                : this.state.countMin - 1,
          });
        } else if (target.innerText === "+") {
          this.setState({
            countMin: this.state.countMin + 1,
          });
        }
      } else {
        if (this.state.countMax <= 98) {
          this.setState({
            countMax:
              target.innerText === "+"
                ? this.state.countMax + 1
                : this.state.countMax - 1,
          });
        } else if (target.innerText === "-") {
          this.setState({
            countMax: parseInt(this.state.countMax) - 1,
          });
        }
      }
    };
    return (
      <>

        <Wrapper>
          <Container>
            <Card
              type="Basic badge"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <Badge bgColor={"blue"} count="1" badge />
              <Badge bgColor={"blue"} count="99+" badge />
            </Card>
            <Card
              type="Basic badge"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <Badge badge />
              <Badge bgColor={"orange"} badge />
              <Badge bgColor={"blue"} badge />
              <Badge bgColor={"green"} badge />
              <Badge bgColor={"red"} badge />
              <Badge bgColor={"yellow"} badge />
              <Badge bgColor={"brown"} badge />
            </Card>
          </Container>
          <Container>            
            <Card
              type="Stand Alone"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <StdAlone>
                <Badge indicator bgColor="blue" stdAlone count="12" badge />
                <Badge indicator bgColor="orange" stdAlone count="50" badge />
                <Badge indicator stdAlone count="99+" badge />
              </StdAlone>
            </Card>
            <Card
              type="Stand Alone"
              desc={
                "Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it."
              }
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                <div>
                  <Badge bgColor="blue" count={this.state.countMin} badge />
                  <BadgeESumButton onClick={setCount} name="min">
                    -
                  </BadgeESumButton>
                  <BadgeESumButton onClick={setCount} name="min">
                    +
                  </BadgeESumButton>
                </div>
                <div>
                  <Badge
                    bgColor="green"
                    count={this.state.countMax}
                    badge
                  />
                  <BadgeESumButton onClick={setCount} name="max">
                    -
                  </BadgeESumButton>
                  <BadgeESumButton onClick={setCount} name="max">
                    +
                  </BadgeESumButton>
                </div>
              </div>
            </Card>
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default Badges;
