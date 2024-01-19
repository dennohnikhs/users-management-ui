import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import NavigationBar from "../navbar/Navbar";

function Layouts({ children }) {
  return (
    <>
      <Container fluid className="mt-5">
        <ToastContainer />
        <NavigationBar />
        <Container className="py-5 ">{children}</Container>
      </Container>
    </>
  );
}

export default Layouts;
