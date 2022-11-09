import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import App from '../App';
import FamilyPage from './FamilyPage';
import Books31 from './Books';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';
import Books from './Books';

const GetNavbar = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/*" element={
        <h1>ws</h1>}
         /> */}
        <Route
          path="family"
          element={
            <p>
              <FamilyPage />
            </p>
          }
        />

        <Route
          path="books"
          element={
            // <p>
            <Books31 />
            // </p>
          }
        />
      </Routes>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink to="/*">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <NavLink to="family">Family</NavLink>
              </Nav.Link>
              <Nav.Link href="#link"></Nav.Link>
              {/* <NavLink to="books">Books</NavLink> */}
              <Link to="books">Books</Link>
              {/* <Outlet /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};

export default GetNavbar;
