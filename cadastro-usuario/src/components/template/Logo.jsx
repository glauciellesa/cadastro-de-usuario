import React from "react";
import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";

export default (props) => (
  <StyledLogo>
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  </StyledLogo>
);

const StyledLogo = styled.aside`
  grid-area: logo;
  background-color: #1a2f3a;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding: 0 15px;
    width: 100%;
  }
`;
