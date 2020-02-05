import React from "react";
import propTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";

const LinkDiv = styled.div`
  * {
    color: #eff4f5;
    text-decoration: none;
  }
`;

const HeaderLink = props => (
  <LinkDiv>
    <Link to={props.navTo}>{props.children}</Link>
  </LinkDiv>
);

HeaderLink.propTypes = {
  navTo: propTypes.string
};

export default HeaderLink;
