import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default (props) => (
  <React.Fragment>
    <Header />
    <StyledMain> Conteúdo </StyledMain>
  </React.Fragment>
);

const StyledMain = styled.main`
  grid-area: content;
`;
