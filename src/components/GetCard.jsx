import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import users from './FamilyMembers.json';

const GetCard = () => {
  return (
    <div className="row">
      <h1 class="text-center mt-5">ATATÜRKÜN AİLESİ</h1>

      {users.map((user) => (
        <div className="col mt-3" key={user.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>{user.desc}</Card.Text>
              <Button variant="primary">Hakkında</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>

    // {/* <div className="col mt-5">
    //     <Card style={{ width: '18rem' }}>
    //       <Card.Img
    //         variant="top"
    //         src="https://www.makaleler.com/fotomakaleler/596623e3da5fc.jpg"
    //       />
    //       <Card.Body>
    //         <Card.Title>{} </Card.Title>
    //         <Card.Text>
    //           Ali Rıza Efendi, “kırmızı hafız” lakaplı Kızıl Hafız Ahmet
    //           Efendi’nin oğludur. 1939 yılında Makedonya yakınlarındaki Kocacık
    //           köyünde dünyaya geldi.
    //         </Card.Text>
    //         <Button variant="primary">Go somewhere</Button>
    //       </Card.Body>
    //     </Card>
    //   </div> */
    //   // </div>
    // }
  );
};

export default GetCard;
