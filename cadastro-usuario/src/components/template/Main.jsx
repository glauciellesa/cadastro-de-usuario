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
  background-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.dark};
  div {
    box-shadow: 0px 0px 15px #605f5f44;
  }
`;
