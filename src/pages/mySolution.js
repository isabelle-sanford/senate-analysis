// Step 1: Import React
import * as React from "react";
//import { Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import Layout from "../components/layout";
import Header1 from "../components/header1";
import Header2 from "../components/header2";

import {
  solIntro,
  explainSRA,
  explainPMFilibuster,
  whatItMeans,
  constitutionality,
  feasibilitySRA,
  feasibilityFilibuster,
} from "../text/mySolText";

import Container from "react-bootstrap/Container";
import { Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MySolutionPage = () => (
  <Layout pageInfo={{ pageName: "mysolution" }}>
    <Container fluid className="bg-skyblue py-4">
      <Row>
        <Col sm="3">
          <a
            title="!Original: MaksimVector: Ipankonin, CC BY-SA 2.5 &lt;https://creativecommons.org/licenses/by-sa/2.5&gt;, via Wikimedia Commons"
            href="https://commons.wikimedia.org/wiki/File:Seal_of_the_United_States_Senate.svg"
          >
            <img
              width="256"
              alt="Seal of the United States Senate"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seal_of_the_United_States_Senate.svg/512px-Seal_of_the_United_States_Senate.svg.png"
            />
          </a>
        </Col>
        <Col sm="9">
          <Header1 title="Introduction" id="intro" />
          <Container>{solIntro}</Container>
        </Col>
      </Row>

      <Header1 title="How It Works" id="howitworks" />
      <Container>
        <Header2 title="Senate Reform Act" id="explainSRA" />
        {explainSRA}
        <Header2 title="Pro-Majoritarian Filibuster" id="explainPMF" />
        {explainPMFilibuster}
      </Container>

      <Header1 title="What It Means" id="whatitmeans" />
      <Container>{whatItMeans}</Container>

      <Header1 title="Can We Do It I: Constitutionality" id="whatitmeans" />
      <Container>{constitutionality}</Container>

      <Header1
        title="Can We Do It II: Political Feasibility"
        id="polfeasibility"
      />
      <Container>
        <Header2 title="Senate Reform Act" id="feasibilitySRA" />
        {feasibilitySRA}
        <Header2 title="Pro-Majoritarian Filibuster" id="feasibilityPMF" />
        {feasibilityFilibuster}
      </Container>

      <Header1 title="Conclusion" id="conclusion" />
    </Container>
  </Layout>
);

export default MySolutionPage;
