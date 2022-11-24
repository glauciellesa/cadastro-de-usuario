import React from "react";
import styled from "styled-components";
export default (props) => {
  return (
    <StyledLink>
      <a href={props.href}>
        <i className={`fa fa-${props.className}`}>{props.children}</i>
      </a>
    </StyledLink>
  );
};

const StyledLink = styled.div`
  display: block;
  text-decoration: none;
  i {
    color: ${({ theme }) => theme.light};
    padding: 15px;
    font-weight: 200;
  }
  i:hover {
    background: linear-gradient(135deg, #07a7e3 0%, #32dac3 100%);
    width: 100%;
  }
`;
