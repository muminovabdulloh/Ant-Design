import React from "react";
import Card from "../Card";
import { Alert } from "./Alert";
import { Container, Wrapper } from "./style";

import SuccessImg from "../../assets/icons/alert_success.svg";
import WarningImg from "../../assets/icons/alert_warning.svg";
import ErrorImg from "../../assets/icons/alert_error.svg";
import InfoImg from "../../assets/icons/alert_info.svg";
import CloseBtn from "../../assets/icons/x.svg";

export const Alerts = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Card type="Basic" desc={"The simplest usage for short messages."}>
            <Alert type="primary">Basic alert</Alert>
          </Card>
          <Card
            type="More types"
            desc={"There are 4 types of Alert: success, info, warning, error"}
          >
            <Alert type="success">Success alert</Alert>
            <Alert type="warning">Warning alert</Alert>
            <Alert type="danger">Error alert</Alert>
            <Alert type="primary">Primary alert</Alert>
          </Card>
        </Container>
        <Container>
          <Card type="Closing Alerts" desc={"To show close button."}>
            <Alert closeBtn={CloseBtn} type="success">
              Success alert
            </Alert>
            <Alert closeBtn={CloseBtn} type="danger">
              Error alert
            </Alert>
            <Alert closeBtn={CloseBtn} type="warning">
              Warnign alert
            </Alert>
            <Alert closeBtn={CloseBtn} type="primary">
              Primary alert
            </Alert>

          </Card>
        </Container>
      </Wrapper>
    </>
  );
};

export default Alerts;
