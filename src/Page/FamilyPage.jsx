import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GetCard from "../components/GetCard";
import FamilyMembers from "../FamilyMembers.json";

const FamilyPage = () => {
  return (
    <Container>
      <h2 className="text-center my-4">Aile Üyeleri</h2>
      <Row className="g-4">
        {FamilyMembers.map((member) => (
          <Col key={member.id} xs={12} sm={6} md={6} lg={4}>
            <GetCard
              title={member.name}
              description={member.about}
              imageUrl={member.img}
              details={{
                "Doğum Tarihi": member.birthDate,
                Meslek: member.occupation,
                Eğitim: member.education,
                "Yaşadığı Yer": member.location,
                "İlgi Alanları": member.interests,
              }}
              cardType="family"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FamilyPage;
