import React from 'react';
import users from '../FamilyMembers.json';
import Card from 'react-bootstrap/Card';

const FamilyPage = () => {
  return (
    <div className="container">
      <div className="justify-content-center d-flex mx-auto">
        <div className="row">
          <div className="col">
            {users.map((user) => (
              <Card
                className="mt-5 shadow"
                style={{ width: '25rem' }}
                key={user.id}
              >
                <Card.Img variant="top" src={user.img} />
                <Card.Body>
                  <Card.Title className="text-center mt-2">
                    {user.name}
                  </Card.Title>
                  <Card.Text>{user.about}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FamilyPage;
