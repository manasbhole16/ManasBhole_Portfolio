import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiMicrosoft,
  SiGit,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows fontSize={"24px"} />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit fontSize={"24px"} />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai fontSize={"24px"} />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft fontSize={"24px"} />
        <div className="tech-icons-text">Microsoft Copilot</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSearch fontSize={"24px"} />
        <div className="tech-icons-text">SEO</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
