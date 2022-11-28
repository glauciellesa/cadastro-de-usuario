import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <StyledLink>
      <Link to={props.href}>
        <i className={`fa fa-${props.className}`}>{props.children}</i>
      </Link>
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
