import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const HeaderInFrame = styled.div`
  background-color: ${({ theme }) => theme.primaryblue};
  padding: 0em 1em;
  height: 40px;
  display: grid;
  align-content: center;
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const StyledContent = styled.div`
  background-color: ${({ theme }) => theme.secondaryblue};
  padding: 1em 1em;
  display: grid;
  margin-bottom: 1rem;
  grid-column-gap: 5px;
  color: white;
`;

const FrameForInputs = ({ children, title, className }) => (
  <StyledWrapper>
    <HeaderInFrame>{title}</HeaderInFrame>
    <StyledContent className={className}>{children}</StyledContent>
  </StyledWrapper>
);

export default FrameForInputs;
