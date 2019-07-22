import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 60px;
  background-color: ${({ theme }) => theme.secondaryblue};
  color: white;
  div {
    margin: 0 auto;
    width: 92%;
    padding: 2rem 0;
    ${({ theme }) => theme.mediaQ.desktop} {
      width: 75%;
    }
    ${({ theme }) => theme.mediaQ.large} {
      width: 65%;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>© 2019 KBM Projekt</div>
  </StyledFooter>
);

export default Footer;
