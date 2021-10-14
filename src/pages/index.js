// Step 1: Import React
import * as React from "react";
import { Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import Layout from "../components/layout";
import Header1 from "../components/header1";

import Image from "react-bootstrap/Image";

import {
  introPara,
  whoTheyAre,
  whoTheyRepresent,
  whyItMatters,
  gender,
  race,
  religion,
  partisanship,
  whoTheyRepresentConclusion,
  compareColonialTimes,
} from "../text/textStuff";
//import { BarPlot, ChamberPlot, StackedBarPlot } from "../plots/Plots";
// import { myRed } from "../text/Info";

// import {
//   sexData,
//   raceData,
//   religData,
//   representationNums,
//   stackedData,
// } from "../plots/SenateData";

import Container from "react-bootstrap/Container";
// import {
//   colonyData,
//   raceDataUS,
//   sexDataUS,
//   religDataUS,
// } from "../plots/CensusData";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Step 2: Define your component

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Container fluid className="hero px-0 mx-0">
      <h1 className="text-center text-light">
        Senate Reform: Why the Senate Doesn't Represent the US
      </h1>
    </Container>

    <Container fluid className="bg-skyblue">
      <Row className="align-items-center ">
        <Col sm="3">
          <Container>
            <ListGroup variant="flush">
              <ListGroup.Item action href="#intro">
                Introduction
              </ListGroup.Item>
              <ListGroup.Item action href="#who" variant="secondary">
                Who They Are
              </ListGroup.Item>
              <ListGroup.Item action href="#represent" variant="secondary">
                Who They Represent
              </ListGroup.Item>
              <ListGroup.Item action href="#why" variant="secondary">
                Why It Matters
              </ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
        <Col sm="9" className="m-0">
          <Header1 title="Introduction" id="intro" />
          <Col className="px-4">
            <p>{introPara}</p>
          </Col>
        </Col>
      </Row>

      <Header1 title="Who They Are" id="who" />
      <Container>
        <p>{whoTheyAre}</p>
      </Container>

      {/* TABS */}
      <Container className="border-blue border-3 p-0 ">
        <Tabs
          defaultActiveKey="gender"
          id="uncontrolled-tab-example"
          className="mb-3 mt-0 bg-blue px-5 border-blue border-bottom-0 border-3"
        >
          <Tab eventKey="gender" title="Gender" className="m-2">
            <Row>
              {/* <ChamberPlot data={[sexDataUS, sexData]} /> */}
              <Image src="../images/plot_images/gender.png" thumbnail />
              {gender}
            </Row>
          </Tab>
          <Tab eventKey="race" title="Race" className="m-2">
            <Row>
              {/* <ChamberPlot data={[raceDataUS, raceData]} /> */}
              {race}
            </Row>
          </Tab>
          <Tab eventKey="religion" title="Religion" className="m-2">
            {/* <ChamberPlot data={[religDataUS, religData]} /> */}
            {religion}
          </Tab>
        </Tabs>
      </Container>

      <Header1 title="Who They Represent" id="represent" />

      <Container>
        {whoTheyRepresent}
        <Row>
          {/* <StackedBarPlot
            data={stackedData}
            title="State Population by Senator"
          /> */}
        </Row>

        <Row className="align-items-center">
          <Col sm="6">{compareColonialTimes}</Col>
          <Col sm="6">
            {/* <BarPlot
              x={colonyData.map((c) => c.state)}
              y={colonyData.map((c) => c.pop)}
              colors={myRed}
              title="Free White Male 16-year-olds in the 13 Colonies, 1790"
              width={700}
            /> */}
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col sm="4">
            {/* <BarPlot
              x={representationNums.map((r) => r.party)}
              y={representationNums.map((r) => r.population)}
              colors={representationNums.map((r) => r.color)}
              title="# of People Each Party Represents"
              width={400}
            /> */}
          </Col>
          <Col sm="8">{partisanship}</Col>
        </Row>

        {whoTheyRepresentConclusion}
      </Container>

      <Header1 title="Why It Matters" id="why" />
      <Container>{whyItMatters}</Container>
    </Container>
  </Layout>
);
// Step 3: Export your component
export default IndexPage;
