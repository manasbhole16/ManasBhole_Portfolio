import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa";

function Achievement() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Key <strong className="purple">Achievement</strong>
      </h1>
      <Col md={10} className="text-left" style={{ textAlign: "left", color: "white" }}>
        
        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Team Lead | VisionCraft – P.I.S.H <FaTrophy style={{ color: "gold", marginBottom: "5px" }} /></h3>
          <h5>National Smart India Hackathon 2025 — 1st Place</h5>
          <br />
          <ul style={{ paddingLeft: "20px" }}>
            <li><strong>Team Leadership:</strong> Led a technical team to secure 1st Place at the National Smart India Hackathon, delivering an enterprise-grade phishing detection ecosystem.</li>
            <li><strong>AI Threat Detection:</strong> Engineered a hybrid AI pipeline (DistilBERT, GNNs, EfficientNet-B0) for real-time multi-vector threat classification.</li>
            <li><strong>Backend Architecture:</strong> Architected a low-latency database infrastructure enabling real-time, client-side threat detection.</li>
            <li><strong>Frontend & Integrations:</strong> Built a React/Tailwind CSS frontend and integrated the VirusTotal API for automated threat flagging.</li>
            <li><strong>Documentation & Pitching:</strong> Authored comprehensive project documentation and presented scalable defense mechanisms at the national level.</li>
            <li><strong>Dynamic Training:</strong> Developed an AI-driven system to generate personalized phishing simulations based on user vulnerability profiles.</li>
          </ul>
        </div>

      </Col>
    </Row>
  );
}

export default Achievement;
