import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { BsBook } from "react-icons/bs";
import booksList from "../BooksList.json";

const BooksPage = () => {
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">
        <BsBook className="me-2" />
        Atatürk'ün Kitapları ve Eserleri
      </h1>
      <Row className="g-4">
        {booksList.map((book) => (
          <Col key={book.id} xs={12} sm={6} md={4}>
            <Card className="h-100 book-card">
              <Card.Img
                variant="top"
                src={book.imageUrl}
                alt={book.title}
                className="book-image"
              />
              <Card.Body>
                <Card.Title className="book-title">{book.title}</Card.Title>
                <Card.Text className="book-description">
                  {book.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BooksPage;
