import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../components/template/Footer";
import Logo from "../components/template/Logo";
import Main from "../components/template/Main";
import Nav from "../components/template/Nav";
import CSSReset from "../theme/CSSReset";
import { theme } from "../theme/ThemeConfig";

export default (props) => (
  <ThemeProvider theme={theme}>
    <StyledApp>
      <CSSReset />
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </StyledApp>
  </ThemeProvider>
);

const StyledApp = styled.div`
  margin: 0;
  display: grid;
  grid-template-columns: ${({ theme }) => theme.asideWidth} 1fr;
  grid-template-rows: ${({ theme }) => theme.headerHeight} 1fr ${({ theme }) =>
      theme.footerHeight};
  grid-template-areas:
    "logo header"
    "menu content"
    "menu footer";
  height: 100vh;
  background-color: #fff;
`;
