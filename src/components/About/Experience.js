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
          <h3 style={{ color: "#c770f0" }}>Data Analyst Intern</h3>
          <h5>Bluestack Fintech, Pune</h5>
          <p><em>May 2026 – Present</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Automated ETL pipelines using Python, SQL, and APIs to process 87,000+ financial data records.</li>
            <li>Performed advanced mutual fund analytics using risk and performance metrics across 4.5 years of market data.</li>
            <li>Created interactive Power BI dashboards and executive reports for data-driven investment analysis.</li>
            <li>Applied Git/GitHub, modular coding practices, and workflow automation to build scalable analytics solutions.</li>
          </ul>
        </div>

        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Data Analyst Intern</h3>
          <h5>TechLiebe, Pune</h5>
          <p><em>Nov 2025 – Feb 2026</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Analyzed and managed data using Advanced MS Excel, including VLOOKUP and Pivot Tables.</li>
            <li>Built interactive Power BI dashboards and reports to visualize key business insights.</li>
            <li>Gained hands-on experience in Business Intelligence, reporting, and data visualization.</li>
            <li>Leveraged ChatGPT and Microsoft Copilot to enhance research, productivity, and workflow efficiency.</li>
          </ul>
        </div>

        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Web Developer Intern</h3>
          <h5>Mildly Offensive, Delhi</h5>
          <p><em>April 2025 – July 2025</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Developed and maintained responsive, cross-platform company websites.</li>
            <li>Optimized website performance, speed, and scalability.</li>
            <li>Debugged and resolved technical issues to ensure smooth functionality.</li>
            <li>Implemented SEO best practices and ensured accessibility compliance.</li>
          </ul>
        </div>

        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Social Media & Marketing Intern</h3>
          <h5>Creaovate (AI-Driven Company), Mumbai</h5>
          <p><em>May 2025 – July 2025</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Executed trend-based campaigns to boost engagement and follower growth.</li>
            <li>Led cold mailing efforts to drive leads and partnerships.</li>
            <li>Analyzed campaign performance and optimized strategies using data-driven methods.</li>
            <li>Created AI and tech-aligned marketing assets in collaboration with the design team.</li>
          </ul>
        </div>

        <div style={{ marginBottom: "30px", borderLeft: "2px solid #c770f0", paddingLeft: "20px" }}>
          <h3 style={{ color: "#c770f0" }}>Logistics Head</h3>
          <h5>Shutterbugs – Photography & Videography Club, KJSSE</h5>
          <p><em>May 2024 – July 2025</em></p>
          <ul style={{ paddingLeft: "20px" }}>
            <li>Led logistical planning and cross-team communication for the official college photography club.</li>
            <li>Oversaw event coverage budgets and directed end-to-end operational execution.</li>
            <li>Coordinated logistics for major college events with zero operational delays or conflicts.</li>
          </ul>
        </div>

      </Col>
    </Row>
  );
}

export default Experience;
