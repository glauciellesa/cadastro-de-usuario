import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import CSSReset from "../theme/CSSReset";
/* import { lightTheme, darkTheme } from "../theme/ThemeConfig"; */
import Logo from "../components/template/Logo";
import Routes from "./Routes";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";

import React /* , { useState } */ from "react";
import styled /* , { ThemeProvider }  */ from "styled-components";
import { BrowserRouter } from "react-router-dom";
import MyThemeProvider from "../components/contexts/ThemeContext";

export default (props) => {
  /* const [theme, setTheme] = useState(lightTheme); */
  return (
    <>
      {/*  <ToggleTheme>
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
      </ToggleTheme> */}
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

/* const StyledToggle = styled.div`
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
 */
