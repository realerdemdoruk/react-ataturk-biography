import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BooksList from './BooksList.json';

const BooksPage = () => {
  return (
    <div className=" gap-5  d-flex mx-auto justify-content-between">
      {BooksList.map((book) => (
        <Card style={{ width: '20rem' }} key={book.id}>
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title className="text-center">{book.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <b>Özgün Adı:</b> {book.originalName}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Yazar:</b> {book.author}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Türü:</b> {book.type}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Dili:</b> {book.language}
            </ListGroup.Item>
            <ListGroup.Item>
              <b>Yayın Yılı:</b> {book.releaseYear}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default BooksPage;
