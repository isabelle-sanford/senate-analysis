// Step 1: Import React
import * as React from "react";
import { Row, Col, ListGroup, Tabs, Tab } from "react-bootstrap";
import Layout from "../components/layout";
import Header1 from "../components/header1";
import Header2 from "../components/header2";

import {
  introPara,
  fixesIntro,
  statehoodFix,
  filibusterIntro,
  filibusterMakeTalk,
  filibusterNuke,
  filibusterProMajoritarian,
  reformIntro,
  HR1,
  reformOther,
  reallocateSeats,
  redrawMap,
  divideCombine,
  redrawEverything,
  abolishSenate,
} from "../text/solText";

import Container from "react-bootstrap/Container";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SolutionsPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Container fluid className="bg-skyblue">
      <Header1 title="Introduction" id="intro" />
      <Container>{introPara}</Container>

      <Container>
        {fixesIntro}
        <Header1 title="Statehood for DC and Puerto Rico" id="statehood" />
        {statehoodFix}
        <Header1 title="Filibuster" id="filibuster" />
        {filibusterIntro}
        <Header2 title="Make Them Talk" id="make-them-talk" />
        {filibusterMakeTalk}
        <Header2 title="Nuke The Filibuster" id="nuke-filibuster" />
        {filibusterNuke}
        <Header2
          title="Change the Filibuster to be Pro-Majoritarian"
          id="pma-filibuster"
        />
        {filibusterProMajoritarian}
        <Header1 title="Election & Campaign Finance Reform" id="reform" />
        {reformIntro}
        <Header2 title="HR1" id="hr1" />
        {HR1}
        <Header2 title="Other" id="reformOther" />
        {reformOther}
        <Header1 title="Reallocate Senate Seats" id="reallocate" />
        {reallocateSeats}
        <Header1 title="Redraw the Map" id="redraw-map" />
        {redrawMap}
        <Header2 title="Divide & Combine" id="divide-combine" />
        {divideCombine}
        <Header2 title="Redraw the Whole Thing" id="redraw-it-all" />
        {redrawEverything}
        <Header1 title="Abolish the Senate" id="abolish-senate" />
        {abolishSenate}
      </Container>
    </Container>
  </Layout>
);

export default SolutionsPage;
