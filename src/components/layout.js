import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { bgSkyblue } from "./layout.module.css";
import CustomNavbar from "./myNavBar";

// Import from an installed package
//import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ pageInfo, children }) => {
  return (
    <>
      <CustomNavbar pageInfo={pageInfo} />
      <Container fluid className={bgSkyblue}>
        {/* <Row noGutters className="justify-content-center">
        <Col>
          <Header siteTitle="Senate Reform" />
        </Col>
      </Row> */}

        <Row className="px-0 main">
          <main>{children}</main>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
