import * as React from "react";
// import { Container, Row } from "react-bootstrap";
// import { bgSkyblue } from "./layout.module.css";
import CustomNavbar from "./myNavBar";

// Import from an installed package
//import "bootstrap/dist/css/bootstrap.min.css";

const Layout = ({ pageInfo, children }) => {
  return (
    <>
      <CustomNavbar pageInfo={pageInfo} />

      <main>{children}</main>
    </>
  );
};

export default Layout;
