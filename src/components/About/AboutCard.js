import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Manas Bhole</span>{" "}
            from <span className="purple">Mumbai, Maharashtra, India</span>.
            <br />
            I am currently working as a{" "}
            <span className="purple">Data Analyst Intern</span> at{" "}
            <span className="purple">Bluestock Fintech</span>.
            <br />
            Previously, I was a Data Analyst Intern at{" "}
            <span className="purple">TechLiebe</span> (Nov 2025 – Jan 2026).
            <br />
            <br />
            Outside of data analysis, I love engaging in activities that keep me
            creative and inspired!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring E-commerce & Dropshipping 🛒
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Data is the new oil!"{" "}
          </p>
          <footer className="blockquote-footer">Manas</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
