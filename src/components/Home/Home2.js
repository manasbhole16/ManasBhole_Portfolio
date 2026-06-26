import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Data Analyst with hands-on experience bridging the gap between academic theory and real-world application. My expertise lies in business intelligence, data visualization, and reporting processes.
              <br />
              <br />
              As a proud winner of the{" "}
              <i>
                <b className="purple">Smart India Hackathon (SIH) 2025</b>
              </i>
              , I thrive in fast-paced environments, using data to solve complex problems and drive initiatives in sectors ranging from ubiquitous technology to financial technology.
              <br />
              <br />
              I’m proficient in tools like{" "}
              <i>
                <b className="purple"> Python, SQL, Advanced MS Excel, and Power BI. </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
