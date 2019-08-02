import React from "react";
import styled from "styled-components";
import close from "../../assets/HelpIcons/close.svg";

const StyledWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.primarygreen};
  margin: 30px 0;
  position: relative;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
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
const StyledContentWrapper = styled.div`
  margin: 4rem 2rem 3rem 3rem;
  max-height: 500px;
  overflow: auto;
`;

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
    <StyledContentWrapper>{children}</StyledContentWrapper>
  </StyledWrapper>
);

export default InfoText;
