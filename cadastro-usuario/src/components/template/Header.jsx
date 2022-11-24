import React from "react";
import styled from "styled-components";

export default (props) => (
  <StyledHeader className="d-none d-sm-flex flex-column">
    <h1 className="mt-3">
      <i className={`fa fa-${props.icon}`}>{props.title}</i>
    </h1>
    <p className="lead text-muted">{props.subtitle}</p>
  </StyledHeader>
);

const StyledHeader = styled.div`
  grid-area: header;
  background-color: ${({ theme }) => theme.light};
  box-shadow: ${({ theme }) => theme.shadow};
  overflow: hidden;
  padding: 0 15px;
  white-space: nowrap;
  h1 {
    font-size: 1.8em;
  }
  i {
    color: ${({ theme }) => theme.dark};
  }
`;
