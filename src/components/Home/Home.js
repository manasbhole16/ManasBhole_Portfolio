import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { Link } from "react-router-dom";
// import Techstack from "../About/Techstack";
// import Github from "../About/Github";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MANAS BHOLE</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "20px", paddingBottom: "50px", justifyContent: "center" }}>
          <h1 className="project-heading" style={{ textAlign: "center", marginBottom: "40px" }}>
            Explore My <strong className="purple">Portfolio </strong>
          </h1>
          <Col md={6} lg={3} style={{ padding: "15px" }}>
            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="project-card-view" style={{ padding: "30px", textAlign: "center", cursor: "pointer", height: "100%", border: "1px solid rgba(199, 112, 240, 0.5)", boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)", borderRadius: "10px", backgroundColor: "transparent" }}>
                <h3>About Me</h3>
                <p style={{ marginTop: "15px" }}>Discover my background, experience, and education.</p>
              </div>
            </Link>
          </Col>
          <Col md={6} lg={3} style={{ padding: "15px" }}>
            <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="project-card-view" style={{ padding: "30px", textAlign: "center", cursor: "pointer", height: "100%", border: "1px solid rgba(199, 112, 240, 0.5)", boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)", borderRadius: "10px", backgroundColor: "transparent" }}>
                <h3>Experience</h3>
                <p style={{ marginTop: "15px" }}>View my professional journey and internships.</p>
              </div>
            </Link>
          </Col>
          <Col md={6} lg={3} style={{ padding: "15px" }}>
            <Link to="/project" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="project-card-view" style={{ padding: "30px", textAlign: "center", cursor: "pointer", height: "100%", border: "1px solid rgba(199, 112, 240, 0.5)", boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)", borderRadius: "10px", backgroundColor: "transparent" }}>
                <h3>Projects</h3>
                <p style={{ marginTop: "15px" }}>View the projects and software I have developed.</p>
              </div>
            </Link>
          </Col>
          <Col md={6} lg={3} style={{ padding: "15px" }}>
            <Link to="/certifications" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="project-card-view" style={{ padding: "30px", textAlign: "center", cursor: "pointer", height: "100%", border: "1px solid rgba(199, 112, 240, 0.5)", boxShadow: "0 4px 5px 3px rgba(119, 53, 136, 0.459)", borderRadius: "10px", backgroundColor: "transparent" }}>
                <h3>Certifications</h3>
                <p style={{ marginTop: "15px" }}>Check out my credentials and professional achievements.</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manasbhole16"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manas-bhole-6621111ab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:manasbhole16@gmail.com"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
