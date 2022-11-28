import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import CSSReset from "../theme/CSSReset";
import { lightTheme, darkTheme } from "../theme/ThemeConfig";
import Logo from "../components/template/Logo";
import Routes from "./Routes";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";

import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

export default (props) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <>
      <StyledToggle>
        <button
          onClick={() => {
            setTheme(darkTheme);
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setTheme(lightTheme);
          }}
        >
          Light
        </button>
      </StyledToggle>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <StyledApp>
            <CSSReset />
            <Logo />
            <Nav />
            <Routes />
            <Footer />
          </StyledApp>
        </ThemeProvider>
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
`;

const StyledToggle = styled.div`
  display: flex;
  position: absolute;
  top: 35px;
  right: 10px;
  gap: 4px;

  button {
    padding: 0 5px;
    border: none;
  }
`;
