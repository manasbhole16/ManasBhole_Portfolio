import React from "react";
import { Row, Col } from "react-bootstrap";

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Education</strong>
      </h1>
      <Col md={10} className="text-left" style={{ textAlign: "left", color: "white" }}>
        <div style={{ marginBottom: "20px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Bachelor of Technology</h3>
          <h5>K.J. Somaiya College of Engineering</h5>
          <p><em>2023 - 2027 | Vidyavihar, Mumbai</em></p>
        </div>
        <div style={{ marginBottom: "20px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Senior Secondary (XII)</h3>
          <h5>Pankaj Sec. and Higher Sec. School</h5>
          <p><em>2021 - 2023 | Jalgaon, Maharashtra</em></p>
        </div>
        <div style={{ marginBottom: "20px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Secondary (X)</h3>
          <h5>Pankaj Global Public School</h5>
          <p><em>2018 - 2021 | Jalgaon, Maharashtra</em></p>
        </div>
      </Col>
    </Row>
  );
}

export default Education;
