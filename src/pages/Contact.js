import React from "react";
import Layout from "../components/Styles/layout";
import ContentWrapper from "../components/Basics/ContentWrapper";
import styled from "styled-components";
import address from "../assets/contact_icons/address.svg";
import data from "../assets/contact_icons/data.svg";
import mail from "../assets/contact_icons/mail.svg";
import phone from "../assets/contact_icons/phone.svg";

const StyledSection = styled.div`
  color: white;
  width: 1000%;
  background-color: ${({ theme }) => theme.primaryblue};
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.secondaryblue};
`;
const StyledWrapper = styled.div`
  max-width: 600px;
  display: flex;
  /* justify-content: space-between; */
`;

const StyledImg = styled.img`
  display: block;
  width: 55px;
  margin-bottom: 2rem;
`;
const StyledData = styled.h3`
  color: white;
  font-size: 1.8rem;
  margin-left: 2rem;
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
              napisz do nas.
            </h3>
            <StyledWrapper>
              <StyledImg src={phone} alt="" />
              <StyledData>508 226 216</StyledData>
            </StyledWrapper>
            <StyledWrapper>
              <StyledImg src={mail} alt="" />
              <StyledData>kontakt@kalkulatorpro.pl</StyledData>
            </StyledWrapper>
            <StyledWrapper>
              <StyledImg src={data} alt="" />
              <StyledData>NIP 8992617267</StyledData>
            </StyledWrapper>
            <StyledWrapper>
              <StyledImg src={address} alt="" />
              <StyledData>Szybowcowa 16/65, 54-130 Wrocław</StyledData>
            </StyledWrapper>
          </ContentWrapper>
        </StyledSection>
      </Layout>
    );
  }
}
export default Contact;
