import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BooksList from '../components/BooksList.json';

const BooksPage = () => {
  return (
    <div className=" justify-content-center d-flex mx-auto">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-5"> Okuduğu Kitaplar</h1>
          {BooksList.map((book) => (
            <Card style={{ width: '20rem' }} className="mt-5" key={book.id}>
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
      </div>
    </div>
  );
};

export default BooksPage;
