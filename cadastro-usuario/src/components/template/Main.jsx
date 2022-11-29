import React from "react";
import styled from "styled-components";
import Header from "./Header";

export default (props) => (
  <React.Fragment>
    <Header {...props} />
    <StyledMain className="content container-fluid">
      <div className="p-3 mt-3">{props.children}</div>
    </StyledMain>
  </React.Fragment>
);

const StyledMain = styled.main`
  grid-area: content;
  div {
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.light};
  }
`;
