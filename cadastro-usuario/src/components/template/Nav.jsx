import React from "react";
import styled from "styled-components";
import ToggleTheme from "../toggle/ToggleTheme";
import NavItem from "./NavItem";

export default (props) => (
  <StyledMenu>
    <nav>
      <NavItem href="/" className="home">
        Início
      </NavItem>
      <NavItem href="/users" className="users">
        Usuários
      </NavItem>
      <ToggleTheme />
    </nav>
  </StyledMenu>
);

const StyledMenu = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.dark};
  box-shadow: ${({ theme }) => theme.shadowNav};

  @media (max-width: 768px) {
    nav {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
      justify-content: space-around;
    }
  }
`;
