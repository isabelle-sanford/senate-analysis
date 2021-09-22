import * as React from "react";
import { Nav, Navbar, Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";
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
} from "./textStuff";
import { BarPlot, ChamberPlot, StackedBarPlot } from "./plotstuff/Plots";

import {
  sexData,
  raceData,
  religData,
  representationNums,
  stackedData,
} from "./plotstuff/SenateData";

import Container from "react-bootstrap/Container";
import { colonyData, raceDataUS, sexDataUS } from "./plotstuff/CensusData";

function ExampleHeader(props) {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col>
          <h2 className="text-center bg-red p-2" id={props.id}>
            {props.title}
          </h2>
        </Col>
      </Row>
    </Container>
  );
}

function ExampleBody(props) {
  return (
    <Container>
      <Row>
        <Col>
          <p>{props.text}</p>
        </Col>
      </Row>
    </Container>
  );
}

export function SenateNavBar() {
  return (
    <Navbar className="bg-blue text-light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-light fw-bold">
          Reform the Senate
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

const App = () => (
  <Container fluid className="p-0 bg-skyblue">
    <SenateNavBar />

    <Container fluid className="hero">
      <h1 className="text-center text-light">
        Senate Reform: Why the Senate Doesn't Represent the US
      </h1>
    </Container>

    <Row className="align-items-center">
      <Col sm="3">
        <Container>
          <ListGroup className="bg-skyblue">
            <ListGroup.Item action href="#intro" variant="secondary">
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
        <ExampleHeader title="Introduction" id="intro" />
        <Col className="px-4">
          <p>{introPara}</p>
        </Col>
      </Col>
    </Row>

    <ExampleHeader title="Who They Are" id="who" />
    <Container>
      <p>{whoTheyAre}</p>
    </Container>

    <Container className="border-blue border-3 p-0">
      <Tabs
        defaultActiveKey="gender"
        id="uncontrolled-tab-example"
        className="mb-3 mt-0 bg-blue px-5 border-blue border-bottom-0 border-3"
      >
        <Tab eventKey="gender" title="Gender" className="m-2">
          <Row>
            <Col sm="6">
              <ChamberPlot data={sexData} title="Senate" />
            </Col>
            <Col sm="6">
              <ChamberPlot data={sexDataUS} title="US" />
            </Col>
          </Row>

          <p>{gender}</p>
        </Tab>
        <Tab eventKey="race" title="Race" className="m-2">
          <Row>
            <Col sm="6">
              <ChamberPlot data={raceData} title="Senate" />
            </Col>
            <Col sm="6">
              <ChamberPlot data={raceDataUS} title="US" />
            </Col>
          </Row>

          <p>{race}</p>
        </Tab>
        <Tab eventKey="religion" title="Religion" className="m-2">
          <ChamberPlot data={religData} title="Senate" />
          <p>{religion}</p>
        </Tab>
      </Tabs>
    </Container>

    <ExampleHeader title="Who They Represent" id="represent" />
    <ExampleBody text={whoTheyRepresent} />
    <Container>
      <Row>
        <StackedBarPlot
          data={stackedData}
          title="State Population by Senator"
        />
      </Row>

      <Row>
        <Col sm="8">
          <ExampleBody text={compareColonialTimes} />
        </Col>
        <Col sm="4">
          <BarPlot
            x={colonyData.map((c) => c.state)}
            y={colonyData.map((c) => c.pop)}
            colors="red"
            title="Free White Male 16-year-olds in the 13 Colonies, 1790"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4">
          <BarPlot
            x={representationNums.map((r) => r.party)}
            y={representationNums.map((r) => r.population)}
            colors={representationNums.map((r) => r.color)}
            title="# of People Each Party Represents"
          />
        </Col>
        <Col sm="8">
          <ExampleBody text={partisanship} />
        </Col>
      </Row>
    </Container>

    <ExampleBody text={whoTheyRepresentConclusion} />

    <ExampleHeader title="Why It Matters" id="why" />
    <ExampleBody text={whyItMatters} />
  </Container>
);

export default App;
