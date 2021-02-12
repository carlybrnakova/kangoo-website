import React from "react";
import propTypes from "prop-types";
import { Link } from "@reach/router";
import "./button.css";

const LinkButton = (props) => (
  <Link className="linky button" to={props.navTo}>
    {props.children}
  </Link>
);

LinkButton.propTypes = {
  navTo: propTypes.string
};

export default LinkButton;
