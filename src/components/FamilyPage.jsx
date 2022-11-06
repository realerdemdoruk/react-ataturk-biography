import React from 'react';
import users from './FamilyMembers.json';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FamilyPage = () => {
  return (
    <div className="mx-auto">
      <div className="row">
        <div className="col m-auto">
          {users.map((user) => (
            <Card style={{ width: '40rem' }} key={user.id}>
              <Card.Img variant="top" src={user.img} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.about}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyPage;
