import React from "react";
import propTypes from "prop-types";
import { Link } from "@reach/router";
import "./button.css";

const LinkButton = props => (
  <div className="button">
    <Link className="linky" to={props.navTo}>
      {props.children}
    </Link>
  </div>
);

LinkButton.propTypes = {
  navTo: propTypes.string
};

export default LinkButton;
