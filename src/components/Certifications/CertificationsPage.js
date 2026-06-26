import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Certifications from "../About/Certifications";

function CertificationsPage() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Certifications />
      </Container>
    </Container>
  );
}

export default CertificationsPage;
