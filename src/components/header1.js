import * as React from "react";
import { Container } from "react-bootstrap";
import { bgRed } from "./header1.module.css";

// Import from an installed package
//import "bootstrap/dist/css/bootstrap.min.css";

const Header1 = ({ title, id }) => {
  return (
    <Container fluid className="p-0">
      <h2 className={bgRed} id={id}>
        {title}
      </h2>
    </Container>
  );
};

export default Header1;
