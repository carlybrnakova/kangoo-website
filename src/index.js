import React from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";

import "./styles.css";

let Home = props => (
  <div>
    <h1>Carly's Kangoo Company</h1>
    <nav>
      <div className="button">
        <Link className="linky" to="schedule">
          Go to schedule
        </Link>
      </div>
    </nav>
  </div>
);

let Schedule = () => (
  <div>
    <div>Schedule</div>
    <nav>
      <Link className="button" to="/">
        Go back
      </Link>
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
