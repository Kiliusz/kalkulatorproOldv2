import React from "react";
import Layout from "../components/Styles/layout";
import Card from "../components/Basics/Card";
import styled from "styled-components";
import heatingImg from "../assets/cardImages/heating.jpg";
import vent from "../assets/cardImages/vent.jpg";
import water from "../assets/cardImages/water.jpg";
import gas from "../assets/cardImages/gas.jpg";
import jumbo from "../assets/jumbo.jpg";
import ContentWrapper from "../components/Basics/ContentWrapper";

const StyledWrapper = styled.div`
  margin: 2rem 0;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr;
  ${({ theme }) => theme.mediaQ.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${({ theme }) => theme.mediaQ.desktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Hero = styled.div`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.secondaryblue};
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${jumbo});
  background-size: cover;
  background-position: 50% 70%;
  height: 300px;
  width: 100%;
  ${({ theme }) => theme.mediaQ.tablet} {
    height: 380px;
    padding: 6rem 0;
  }
`;

const H1 = styled.h1`
  margin: 0;
  display: inline-block;
  padding: 0.2em 0.2em 0.2em 0.2em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  color: white;
  font-size: 2.8rem;
  ${({ theme }) => theme.mediaQ.tablet} {
    font-size: 3.5rem;
  }
`;
const H2 = styled.h2`
  margin: 0;
  display: inline-block;
  padding: 0.2em 0.2em 0.2em 0.2em;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
  color: white;
  font-size: 2rem;
  ${({ theme }) => theme.mediaQ.tablet} {
    font-size: 2.5rem;
  }
`;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero>
          <ContentWrapper>
            <H1>Kalkulator inżynierski </H1>
            <br />
            <H2>Dobór średnic, obliczenia spadków ciśnień </H2>
          </ContentWrapper>
        </Hero>
        <ContentWrapper>
          <StyledWrapper>
            <Card tittle="Ogrzewanie" imgPath={heatingImg} to="/Ogrzewanie">
              <p>
                Dobór średnicy rur na podstawie podanego przepływu. Obliczenie przepływu
                oraz średnic na podstawie podanej mocy i różnicy temperatur.
              </p>
            </Card>

            <Card tittle="Wentylacja" imgPath={vent} to="/Wentylacja">
              <p>
                Automatyczny dobór kanałów wentylacyjnych Spiro w oparciu o podany
                przepływ. Obliczenie prędkości w kanale prostokątnym.
              </p>
            </Card>
            <Card tittle="Instalacja wodna" imgPath={water} to="/Wodociag">
              <p>
                Automatyczny dobór średnic rur wodnych w oparciu o sumę wypływów
                normatywnych i przepływ obliczeniowy. Automatyczne obliczenie przepływu.
              </p>
            </Card>
            <Card tittle="Gaz" imgPath={gas} to="/Gaz">
              <p>
                Przeliczanie mocy urządzeń gazowych na wartość przepływu. Obliczenie
                spadku ciśnienia w przewodach oraz dobór średnicy.
              </p>
            </Card>
          </StyledWrapper>
        </ContentWrapper>
      </Layout>
    );
  }
}

export default IndexPage;
