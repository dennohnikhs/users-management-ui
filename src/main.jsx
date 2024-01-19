import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./styles/styledComponents.jsx";
import App from "./index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container className="mt-3 mb-4">
      <App />
    </Container>
  </React.StrictMode>
);
