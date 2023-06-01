import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../style.css";

const GetNavbar = () => {
  return (
    <Container fluid className=" bg-white sticky-top">
          <div className="w-100 justify-content-center d-flex">
        <Navbar className="text-center" bg="white" expand="lg">
          <div className="mx-auto d-flex text-center ">
         
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link>
              <Link className="NavLink" to="/">
                <h6>Home</h6>
              </Link>
            </Nav.Link>
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
          </div>
        </Navbar>
      </div>
    </Container>
  );
};

export default GetNavbar;
