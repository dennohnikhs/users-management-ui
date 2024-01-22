import React from "react";
import Layout from "../layouts/Layout";
import { Col, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <Layout>
      <h3 className="text-center">About Us</h3>
      <Row className="justify-content-center">
        <Col xs={12} md={4}>
          About us.This is part of udemy course for complete node js application
          using express js for backend and React js framework for frontend
        </Col>
      </Row>
    </Layout>
  );
}

export default AboutUs;
