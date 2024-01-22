import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <>
      {" "}
      <Navbar fixed="top" expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold fst-italic">
            Simple Client
          </Navbar.Brand>
          <Nav className="flex-grow-1 justify-content-end">
            <Nav.Link
              as={NavLink}
              to="/create-user"
              className="badge fw-bold text-wrap flex-wrap bg-secondary p-2"
            >
              Create User
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
