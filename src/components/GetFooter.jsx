import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const GetFooter = () => {
  const socialLinks = [
    {
      icon: <AiFillGithub />,
      url: "https://github.com/realerdemdoruk",
      label: "Github",
    },
    {
      icon: <AiOutlineInstagram />,
      url: "https://www.instagram.com/realerdemdoruk/",
      label: "Instagram",
    },
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/erdem-doruk-2954b7227/",
      label: "LinkedIn",
    },
    {
      icon: <AiFillTwitterCircle />,
      url: "https://x.com/realerdemdoruk",
      label: "Twitter",
    },
  ];

  return (
    <footer className="footer">
      <Container>
        <Row className="py-4">
          <Col className="text-center">
            <h5 className="footer-title mb-4">Sosyal Medya</h5>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {React.cloneElement(link.icon, { className: "social-icon" })}
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3 border-top">
            <p className="mb-0 footer-copyright">
              © {new Date().getFullYear()} Tüm hakları saklıdır.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default GetFooter;
