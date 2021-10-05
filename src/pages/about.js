import * as React from "react";
import {
  Nav,
  Navbar,
  Row,
  Col,
  ListGroup,
  Tabs,
  Tab,
  Image,
} from "react-bootstrap";
import { sources, dataSources, aboutMe } from "../text/citationText";
import { SenateNavBar } from "./index.js";

export const AboutPage = () => (
  <Container fluid className="bg-skyblue">
    <SenateNavBar />

    <Row>
      <Col sm="8">
        <h1>Citations</h1>
        <p>
          <ul>
            {sources.map((source) => (
              <li>{source}</li>
            ))}
          </ul>
        </p>
      </Col>
      <Col sm="4">
        {dataSources.map((source) => ({ source }))}

        <h1>About Me</h1>
        {aboutMe}
      </Col>
    </Row>
  </Container>
);

// Step 3: Export your component
export default AboutPage;
