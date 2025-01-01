import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Principles = () => {
  const principles = [
    {
      title: "Cumhuriyetçilik",
      icon: "🏛️",
      description: "Milli egemenlik temelli yönetim sistemi",
    },
    {
      title: "Milliyetçilik",
      icon: "🇹🇷",
      description: "Türk milletinin bağımsızlığı ve mutluluğu",
    },
    {
      title: "Halkçılık",
      icon: "👥",
      description: "Kanun önünde eşitlik ve sınıfsız toplum",
    },
    {
      title: "Devletçilik",
      icon: "🏢",
      description: "Ekonomik kalkınmada devlet öncülüğü",
    },
    {
      title: "Laiklik",
      icon: "⚖️",
      description: "Din ve devlet işlerinin ayrılması",
    },
    {
      title: "İnkılapçılık",
      icon: "🔄",
      description: "Sürekli gelişim ve çağdaşlaşma",
    },
  ];

  return (
    <Container className="principles-section">
      <h2>Atatürk İlkeleri</h2>
      <Row className="g-4">
        {principles.map((principle, index) => (
          <Col key={index} xs={12} sm={6} md={4}>
            <div className="principle-card">
              <div className="principle-icon">{principle.icon}</div>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Principles;
