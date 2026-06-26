import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiMicrosoft,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={"24px"} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft fontSize={"24px"} />
        <div className="tech-icons-text">Microsoft Copilot</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
