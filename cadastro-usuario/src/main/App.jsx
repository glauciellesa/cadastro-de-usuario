import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import CSSReset from "../theme/CSSReset";
import Logo from "../components/template/Logo";
import Routes from "./Routes";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";

import React from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../components/contexts/ThemeContext";

export default (props) => {
  return (
    <>
      <BrowserRouter>
        <MyThemeProvider>
          <StyledApp>
            <CSSReset />
            <Logo />
            <Nav />
            <Routes />
            <Footer />
          </StyledApp>
        </MyThemeProvider>
      </BrowserRouter>
    </>
  );
};

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
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    grid-template-rows: ${({ theme }) => theme.headerHeight} ${({ theme }) =>
        theme.menuTopHeight} 1fr ${({ theme }) => theme.footerHeight};
    grid-template-columns: ${({ theme }) => theme.asideWidth} 1fr;
    grid-template-areas:
      "logo header"
      "menu menu"
      "content content"
      "footer footer";
  }

  @media (max-width: 576px) {
    grid-template-rows: ${({ theme }) => theme.logoHeight} ${({ theme }) =>
        theme.menuTopHeight} 1fr ${({ theme }) => theme.footerHeight};
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "menu"
      "content"
      "footer";
  }
`;
