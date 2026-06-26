import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import CertificationsPage from "./components/Certifications/CertificationsPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
        <a
          href="mailto:manasbhole16@gmail.com"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#c770f0",
            color: "white",
            padding: "15px",
            borderRadius: "50%",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            fontSize: "24px"
          }}
          title="Contact Me"
        >
          📧
        </a>
      </div>
    </Router>
  );
}

export default App;
