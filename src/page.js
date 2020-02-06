import React from "react";
import propTypes from "prop-types";
import { Link } from "@reach/router";
import styled from "styled-components";
import HeaderLink from "./header-link";

const Root = styled.div`
  display: flex;
  /* min-height: 103.2vh; */
  /* min-height: 100vh; */
  /* height: 100%; */
  flex-direction: column;
  /* flex: 1; */
  /* justify-content: space-between; */
  /* align-items: space-between; */
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  flex-direction: column;
  background-color: #395660;
  padding: 8px;

  h1 {
    color: #eff4f5;
    font-size: 48px;
  }
`;

const NavSection = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const FooterContainer = styled.div`
  background-color: #395660;
  height: 40px;
  flex-shrink: 0;
`;

const Page = props => (
  <Root>
    <HeaderContainer>
      {props.title}
      <NavSection>
        <HeaderLink navTo="/about">About us</HeaderLink>
        <HeaderLink navTo="/schedule">Schedule</HeaderLink>
      </NavSection>
    </HeaderContainer>
    <nav>{/* <LinkButton navTo="schedule">Go to schedule</LinkButton> */}</nav>
    {props.children}
  </Root>
);

Page.propTypes = {
  navTo: propTypes.string,
  title: propTypes.node
};

export default Page;
