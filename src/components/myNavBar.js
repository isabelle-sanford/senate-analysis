import React from "react";
import { Link } from "gatsby";
import { bgBlue, navLinkText, navBrand } from "./myNavBar.module.css";

import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo);
  return (
    <Navbar expand="lg" id="site-navbar" sticky="top" className={bgBlue}>
      {/* <Container> */}
      <Link to="/" className={navBrand}>
        <Navbar.Brand as="span" className={navBrand}>
          Senate Reform
        </Navbar.Brand>
      </Link>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
          <Link to="/" className={navLinkText}>
            <Nav.Link as="span" eventKey="index">
              Home
            </Nav.Link>
          </Link>
          <Link to="/about" className={navLinkText}>
            <Nav.Link as="span" eventKey="about">
              About
            </Nav.Link>
          </Link>
          <Link to="/solutions" className={navLinkText}>
            <Nav.Link as="span" eventKey="solutions">
              Solutions
            </Nav.Link>
          </Link>
          <Link to="/mySolution" className={navLinkText}>
            <Nav.Link as="span" eventKey="mysolution">
              My Solution
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default CustomNavbar;
