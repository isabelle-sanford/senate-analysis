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

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const MySolutionPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Container fluid className="bg-skyblue">
      <Header1 title="Introduction" id="intro" />
      <Container>{solIntro}</Container>

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
