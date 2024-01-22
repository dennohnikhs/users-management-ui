import React from "react";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import NavigationBar from "./TopNavigation";

function Layout({ children }) {
  return (
    <>
      <Container fluid className="mt-5">
        <ToastContainer />
        <NavigationBar />
        <Container className="py-5 ">{children}</Container>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
