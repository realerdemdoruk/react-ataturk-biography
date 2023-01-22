import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import users from './FamilyMembers.json';
import { Link } from 'react-router-dom';
import '../style.css';

const GetCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center mt-5">ATATÜRKÜN AİLESİ</h1>
        </div>

        <div className="col-md-12 d-flex justify-content-center flex-wrap">
          {users.map((user) => (
            <div className="mx-auto mt-3" key={user.id}>
              <Card style={{ width: '18rem' }} className="shadow">
                <Card.Img variant="top" src={user.img} />
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.desc}</Card.Text>
                  <Button variant="primary">
                    <Link className="Links" to="/family">
                      Daha fazla bilgi
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetCard;
