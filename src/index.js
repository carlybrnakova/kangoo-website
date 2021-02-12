import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import About from "./about/index.js";
import Schedule from "./schedule/index.js";
import Page from "./page";
import styled from "styled-components";

import "./styles.css";

const Title = styled.h1`
  font-weight: 700;
`;

// const title =
// <HeaderLink navTo="/schedule">Schedule</HeaderLink>

const title = <Title>Kangoo SLC</Title>;
let Home = (props) => (
  <Page title={title} showMenu={true}>
    Welcome!
  </Page>
);

function App() {
  return (
    <Router className="App">
      <Home path="/" />
      <About path="about" />
      <Schedule path="schedule" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
// rootElement.setAttribute("width", "100%");
const FullApp = styled(App)`
  /* width: 100%; */
  /* margin: 0; */
  display: flex;
  /* flex: 1 0 auto; */
  /* min-height: 103.2vh; */
  /* min-height: 100vh; */
  /* flex-direction: column; */
`;
ReactDOM.render(<App />, rootElement);
