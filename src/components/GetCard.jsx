import React from "react";
import { Card } from "react-bootstrap";

const GetCard = ({ title, description, imageUrl, details, cardType }) => {
  return (
    <Card className="custom-card h-100">
      <div className="card-img-container">
        <Card.Img variant="top" src={imageUrl} className="card-img" />
      </div>
      <Card.Body>
        <Card.Title className="card-title text-center">{title}</Card.Title>
        <Card.Text className="card-description text-center">
          {description}
        </Card.Text>
        {details && (
          <div className="card-details">
            {Object.entries(details).map(([key, value]) => (
              <p key={key} className="text-center">
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default GetCard;
