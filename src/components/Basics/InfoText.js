import React from "react";
import styled from "styled-components";
import close from "../../assets/HelpIcons/close.svg";

const StyledWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.primarygreen};
<<<<<<< HEAD
  /* padding: 3rem 0rem; */
  margin: 30px 0;
  position: relative;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};

  /* overflow: hidden; */
=======
  padding: 3rem 3rem;
  margin: 30px 0;
  position: relative;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  max-height: 1000px;
>>>>>>> cb4392033da33e9cfe2e53260dd554cc2c8b6963
`;

const IconWrapper = styled.div`
  position: absolute;
  height: 60px;
  width: 80px;
  z-index: 5;
  background-color: white;
  top: -30px;
  left: 20px;
  display: flex;
  justify-content: center;
  img {
    width: 40px;
  }
`;
<<<<<<< HEAD
const StyledContentWrapper = styled.div`
  margin: 4rem 2rem 3rem 3rem;
  max-height: 500px;
  overflow: auto;
`;

=======
>>>>>>> cb4392033da33e9cfe2e53260dd554cc2c8b6963
const CloseButton = styled.div`
  /* background-color: red; */
  top: 10px;
  right: 10px;
  position: absolute;
  height: 3rem;
  width: 3rem;

  cursor: pointer;
  img {
    width: 20px;
  }
`;

const InfoText = ({ children, imgPath, imgAlt, isOpen, onClick }) => (
  <StyledWrapper isOpen={isOpen}>
    <IconWrapper>
      <img src={imgPath} alt={imgAlt} />
    </IconWrapper>
    <CloseButton onClick={onClick}>
      <img src={close} alt="" />
    </CloseButton>
<<<<<<< HEAD
    <StyledContentWrapper>{children}</StyledContentWrapper>
=======
    {children}
>>>>>>> cb4392033da33e9cfe2e53260dd554cc2c8b6963
  </StyledWrapper>
);

export default InfoText;
