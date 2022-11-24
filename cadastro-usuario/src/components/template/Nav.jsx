import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import ContentMenu from "./NavItem";

export default (props) => (
  <StyledMenu>
    <nav>
      <NavItem href="#/" className="home">
        Início
      </NavItem>
      <NavItem href="#/users" className="users">
        Usuários
      </NavItem>
    </nav>
  </StyledMenu>
);

const StyledMenu = styled.aside`
  grid-area: menu;
  background-color: ${({ theme }) => theme.dark};
  box-shadow: ${({ theme }) => theme.shadowNav};
`;
