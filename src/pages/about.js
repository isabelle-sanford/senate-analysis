import * as React from "react";
import { Row, Col } from "react-bootstrap";
import {
  uncitedSources,
  citedSources,
  dataSources,
  aboutMe,
} from "../text/citationText";

import Layout from "../components/layout";

export const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
    <Row>
      <Col sm="8">
        <h2 className="text-center">Citations</h2>
        <hr />
        <p>
          <ul>
            {uncitedSources.map((source) => (
              <li>{source}</li>
            ))}
          </ul>
          <hr />
          <ul>
            {citedSources.map((source) => (
              <li>{source}</li>
            ))}
          </ul>
        </p>
      </Col>
      <Col sm="4">
        <h2 className="text-center">Data</h2>
        <hr />
        <p>
          <ul>
            {dataSources.map((source) => (
              <li>{source}</li>
            ))}
          </ul>
        </p>

        <h2 className="text-center">About Me</h2>
        <hr />
        {aboutMe}
      </Col>
    </Row>
  </Layout>
);

// Step 3: Export your component
export default AboutPage;
