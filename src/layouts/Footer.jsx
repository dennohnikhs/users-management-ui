import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 1 }}>
          <h2 className="text-decoration-underline">Contact</h2>
          <NavLink className="text-muted " to="/contact">
            Contact
          </NavLink>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <h2 className="text-decoration-underline">User</h2>
          <NavLink className="text-muted " to="/create-user">
            Create User
          </NavLink>
        </Col>
        <Col md={{ span: 3, offset: 1 }}>
          <h2 className="text-decoration-underline">About Us</h2>
          <NavLink className="text-muted " to="/about-us">
            About Us
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
