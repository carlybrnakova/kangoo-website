import React from "react";
import propTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";

const MenuRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #568291;

  > div {
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const MenuHeaderRow = (props) => <MenuRowDiv>{props.children}</MenuRowDiv>;

MenuHeaderRow.propTypes = {
  links: propTypes.array
};

export default MenuHeaderRow;
