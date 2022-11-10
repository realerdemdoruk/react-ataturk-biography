import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FamilyPage from './FamilyPage';
import BooksPage from './BooksPage';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';

const GetNavbar = () => {
  return (
    <BrowserRouter>
      <Routes>
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
            <p>
              <BooksPage />
            </p>
          }
        />
      </Routes>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink to="/">Home</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <NavLink to="family">Family</NavLink>
              </Nav.Link>
              <Nav.Link href="#">
                <NavLink to="books">Books</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </BrowserRouter>
  );
};

export default GetNavbar;
