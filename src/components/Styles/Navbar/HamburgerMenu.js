import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  cursor: pointer;
  padding: 15px 0 15px 15px;
  ${({ theme }) => theme.mediaQ.desktop} {
    display: none;
  }
`;
const StyledHamburgerLine = styled.div`
  position: relative;
  background-color: white;
  height: 2px;
  width: 26px;

  ::after,
  ::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 2px;
    background-color: white;
  }
  ::after {
    top: -7px;
  }
  ::before {
    top: 7px;
  }
`;

const HamburgerMenu = (props) => (
  <StyledWrapper {...props}>
    <StyledHamburgerLine />
  </StyledWrapper>
);

export default HamburgerMenu;
