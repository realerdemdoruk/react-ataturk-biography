import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import users from './FamilyMembers.json';

const GetCard = () => {
  return (
    <div className="row">
      <h1 className="text-center mt-5">ATATÜRKÜN AİLESİ</h1>

      {users.map((user) => (
        <div className="col mt-3" key={user.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.desc}</Card.Text>
              <Button variant="primary">Daha fazla bilgi</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default GetCard;
