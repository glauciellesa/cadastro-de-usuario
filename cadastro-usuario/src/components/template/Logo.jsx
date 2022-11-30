import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/imgs/logo.png";

export default (props) => (
  <StyledLogo>
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
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

  @media (max-width: 576px) {
    img {
      width: 350px;
    }
  }
`;
