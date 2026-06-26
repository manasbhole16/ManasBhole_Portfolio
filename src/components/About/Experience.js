import React from "react";
import { Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Professional <strong className="purple">Experience</strong>
      </h1>
      <Col md={10} className="text-left" style={{ textAlign: "left", color: "white" }}>
        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Web Developer Intern</h3>
          <h5>Mildly Offensive</h5>
          <p><em>April 2025 – July 2025</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Developed and maintained responsive, cross-platform company websites.</li>
            <li>Optimized website performance, speed, and scalability.</li>
            <li>Debugged and resolved technical issues to ensure smooth functionality.</li>
            <li>Implemented SEO best practices and ensured accessibility compliance.</li>
          </ul>
        </div>
        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Social Media and Marketing Intern</h3>
          <h5>Creaovate – An AI Driven Company</h5>
          <p><em>May 2025 – July 2025</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Executed trend-based campaigns to boost engagement and followers.</li>
            <li>Led cold mailing efforts to drive leads and partnerships.</li>
            <li>Analyzed campaign performance and optimized strategies.</li>
            <li>Created AI and tech-aligned marketing assets with the design team.</li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

export default Experience;
