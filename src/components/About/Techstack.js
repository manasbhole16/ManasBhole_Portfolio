import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftexcel,
  SiPowerbi,
  SiPython,
  SiMysql,
  SiOpenai,
  SiGoogle,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel fontSize={"24px"} />
        <div className="tech-icons-text">Advanced Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"24px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase fontSize={"24px"} />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"24px"} />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogle fontSize={"24px"} />
        <div className="tech-icons-text">Gemini Pro</div>
      </Col>
    </Row>
  );
}

export default Techstack;
