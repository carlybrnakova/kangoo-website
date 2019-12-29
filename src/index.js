import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Schedule from "./schedule/index.js";
import LinkButton from "./link-button";

import "./styles.css";

let Home = props => (
  <div>
    <h1>Carly's Kangoo Company</h1>
    <nav>
      <LinkButton navTo="schedule">Go to schedule</LinkButton>
    </nav>
  </div>
);

function App() {
  return (
    <Router className="App">
      <Home path="/" />
      <Schedule path="schedule" />
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
