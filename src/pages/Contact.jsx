import React from "react";
import Layout from "../layouts/Layout";
import { Col, Row } from "react-bootstrap";

function Contact() {
  return (
    <Layout>
      <Row className="justify-content-center">
        <Col md={6}>
          Contact me at{" "}
          <span className="font-italic">davidsonalangat316@gmail.com</span>
        </Col>
      </Row>
    </Layout>
  );
}

export default Contact;
