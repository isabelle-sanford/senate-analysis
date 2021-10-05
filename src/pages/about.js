import * as React from "react";
import { Row, Col } from "react-bootstrap";
import { sources, dataSources, aboutMe } from "../text/citationText";

import Layout from "../components/layout";

export const AboutPage = () => (
  <Layout pageInfo={{ pageName: "about" }}>
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
        <p>
          <ul>
            {dataSources.map((source) => (
              <li>{source}</li>
            ))}
          </ul>
        </p>

        <h1>About Me</h1>
        {aboutMe}
      </Col>
    </Row>
  </Layout>
);

// Step 3: Export your component
export default AboutPage;
