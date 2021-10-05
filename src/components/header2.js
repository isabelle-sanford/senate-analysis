import * as React from "react";
import { Container } from "react-bootstrap";
import { bgBlue } from "./header2.module.css";

// Import from an installed package
//import "bootstrap/dist/css/bootstrap.min.css";

const Header2 = ({ title, id }) => {
  return (
    <Container fluid className="p-0">
      <h2 className={bgBlue} id={id}>
        {title}
      </h2>
    </Container>
  );
};

export default Header2;
