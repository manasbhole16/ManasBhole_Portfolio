import React from "react";
import { Row, Col } from "react-bootstrap";

function Certifications() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Certifications</strong>
      </h1>
      <Col md={10} className="text-left" style={{ textAlign: "left", color: "white" }}>
        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Tableau Training</h3>
          <h5>Teachnook (Virtual)</h5>
          <p><em>Nov 2023 - Dec 2023</em></p>
          <p>Completed virtual training on Tableau for data visualization, dashboard creation, and business intelligence reporting using real-world datasets.</p>
        </div>
        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Machine Learning Training</h3>
          <h5>Internshala Trainings</h5>
          <p><em>Apr 2024 - Jun 2024</em></p>
          <p>6-week online certified training covering Introduction to Machine Learning, Python programming, Data Exploration, Pre-processing techniques, and Linear Regression models.</p>
        </div>
        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>SQL for Data Analytics</h3>
          <h5>Internshala Trainings</h5>
          <p><em>Jun 2024 - Jul 2024</em></p>
          <p>6-week online certified training on SQL fundamentals, data retrieval, manipulation, and advanced querying. Achieved a score of 60 in the final assessment.</p>
        </div>
      </Col>
    </Row>
  );
}

export default Certifications;
