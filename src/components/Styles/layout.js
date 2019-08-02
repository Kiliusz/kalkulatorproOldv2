import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./Navbar/Navbar";
import SEO from "../SEO";
import Footer from "./Footer";

const theme = {
  primaryblue: "#2B3451",
  secondaryblue: "#566087",
  graydark: "#3E3E3E",
  graylight: "#D8D8D8",
  grayextralight: "#F9F9F9",
  primaryred: "#95190C",
  primarygreen: "#009688",
  mediaQ: {
    tablet: "@media (min-width: 768px)",
    desktop: "@media (min-width: 1024px)",
    large: "@media (min-width: 1400px)",
  },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    font-family: "Roboto";
    font-weight: 400;
    margin: 0;
    padding: 0;  
  }
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
  a {
    text-decoration: none
  }
  h1 {
    font-size: 3rem;
    margin-top: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
<<<<<<< HEAD
  display: flex;
  flex-wrap: wrap;
=======
>>>>>>> cb4392033da33e9cfe2e53260dd554cc2c8b6963
  flex: 1;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <SEO />
      <Container>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  </ThemeProvider>
);
export default Layout;
