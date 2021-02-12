import React from "react";
import ButtonLink from "../link-button";
import styled from "styled-components";
import Page from "../page";

const Title = styled.h1`
  height: 150px;
  color: #eff4f5;
  background-color: #395660;
`;

const UnderConstruction = styled.div`
  height: 50px;
`;

let Schedule = () => (
  <Page title={<Title>Schedule</Title>} showMenu={false}>
    <UnderConstruction>Under Construction</UnderConstruction>
    <nav>
      <ButtonLink navTo="/">Go back</ButtonLink>
    </nav>
  </Page>
);

export default Schedule;
