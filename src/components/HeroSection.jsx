import React from "react";
import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <div className="hero-content">
          <h1>Mustafa Kemal Atatürk</h1>
          <p className="hero-quote">
            "Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye
            Cumhuriyeti ilelebet payidar kalacaktır."
          </p>
          <p className="hero-date">1881 - 1938</p>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
