import React from "react";
import Layout from "../components/Styles/layout";
import ContentWrapper from "../components/Basics/ContentWrapper";
import styled from "styled-components";

const StyledSection = styled.div`
  color: white;
  height: 200px;
  background-color: ${({ theme }) => theme.primaryblue};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.secondaryblue};
`;

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <StyledSection>
          <ContentWrapper>
            <h2>Skontaktuj się z nami!</h2>
            <h3>
              Jeśli masz jakieś propozycje, uwagi lub pomysł na ulepszenie aplikacji -
              napisz nam maila
            </h3>
          </ContentWrapper>
        </StyledSection>
      </Layout>
    );
  }
}
export default Contact;
