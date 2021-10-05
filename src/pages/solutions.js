// Step 1: Import React
import * as React from "react";
import { Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import Layout from "../components/layout";
import Header1 from "../components/header1";
import Header2 from "../components/header2";

import { introPara, fixesIntro, statehoodFix } from "../text/solText";

import Container from "react-bootstrap/Container";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Container fluid className="bg-skyblue">
      <Header1 title="Introduction" id="intro" />
      {introPara}

      <Header1 title="Solutions" id="solutions" />
      <Container>
        {fixesIntro}
        <Header2 title="Statehood for DC and Puerto Rico" id="statehood" />
        {statehoodFix}
      </Container>
    </Container>
  </Layout>
);

export default SolutionsPage;
