import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../style.css';

const GetNavbar = () => {
  return (
    <div className="container bg-light sticky-top">
      <div className="w-100 justify-content-center d-flex">
        <Navbar bg="light" expand="lg">
          <Container className="mx-auto  text-center ">
            <Nav.Link>
              <Link className="NavLink" to="/home">
                <h6>Home</h6>
              </Link>
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link className="NavLink" to="/family">
                    <h6>Family</h6>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="NavLink" to="/book">
                    <h6>Books</h6>
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default GetNavbar;
