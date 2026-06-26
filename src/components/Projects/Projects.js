import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="VisionCraft - P.I.S.H"
              description="Phishing Intelligence and Security Hub - A Smart India Hackathon 2025 Project. An enterprise-grade, browser-extension-based phishing-detection and user-training system that addresses the evolving nature of phishing attacks using a Hybrid AI Detection Pipeline (DistilBERT + Graph Neural Networks)."
              ghLink="https://github.com/VarunS27/72234_VisionCraft._final"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="DU Seva"
              description="India's most powerful mock test platform designed specifically to boost percentiles for the CUET. A full-featured, responsive Next.js application integrated with Firebase for database & auth, KaTeX for math equations, and Razorpay for payment processing."
              ghLink="https://github.com/GargeshPatil/duseva"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="AI-Powered Traffic Management"
              description="An intelligent system using computer vision to optimize traffic flow and reduce congestion in real-time."
              ghLink="https://github.com/manasbhole16"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Nifty-100-Financial-Intelligence-Platform"
              description="A Python-based financial intelligence platform for Nifty 100 stocks. Leverages data analysis and potential machine learning techniques to extract insights from financial data."
              ghLink="https://github.com/manasbhole16/Nifty-100-Financial-Intelligence-Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="CAPSTONE-PROJECT---I"
              description="First capstone project implemented in Python. Demonstrates core programming, data analysis, and problem-solving skills."
              ghLink="https://github.com/manasbhole16/CAPSTONE-PROJECT---I"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="NexGenClass"
              description="A modern web application built with JavaScript. Focuses on providing a next-generation classroom or educational experience."
              ghLink="https://github.com/manasbhole16/NexGenClass"
              demoLink="https://nexgen-five-pink.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="StegoX"
              description="SECURE_DATA_ENCAPSULATION tool built with JavaScript. Implements steganography techniques to hide data securely within other files or media."
              ghLink="https://github.com/manasbhole16/StegoX"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Foodle"
              description="A food-themed website application built with HTML. Provides a clean and interactive interface for food-related content."
              ghLink="https://github.com/manasbhole16/Foodle"
              demoLink="https://food-website-main-kappa.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Dijkstra's Algorithm"
              description="Visualization or implementation of Dijkstra's shortest path algorithm. Built with JavaScript to demonstrate algorithmic thinking."
              ghLink="https://github.com/manasbhole16/dijkstras_algorithm-main"
              demoLink="https://dijkstras-algorithm-main.vercel.app"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
