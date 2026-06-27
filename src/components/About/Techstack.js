import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftexcel,
  SiPowerbi,
  SiPython,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiTableau,
  SiAmazonaws,
  SiDocker,
  SiLinux,
  SiSocketdotio
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython fontSize={"24px"} />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript fontSize={"24px"} />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript fontSize={"24px"} />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql fontSize={"24px"} />
        <div className="tech-icons-text">SQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql fontSize={"24px"} />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb fontSize={"24px"} />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase fontSize={"24px"} />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau fontSize={"24px"} />
        <div className="tech-icons-text">Tableau</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel fontSize={"24px"} />
        <div className="tech-icons-text">Advanced Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws fontSize={"24px"} />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker fontSize={"24px"} />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux fontSize={"24px"} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSocketdotio fontSize={"24px"} />
        <div className="tech-icons-text">Socket.io</div>
      </Col>
    </Row>
  );
}

export default Techstack;
