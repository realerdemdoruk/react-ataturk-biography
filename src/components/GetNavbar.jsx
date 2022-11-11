import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const GetNavbar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="mx-auto text-center">
          <Navbar.Brand>
            <Link to="/home">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/family">Family</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/book">Books</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default GetNavbar;
