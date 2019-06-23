import React from "react";
import styled from "styled-components";

const StyledContentWrapper = styled.div`
  margin: 0 auto;
  width: 92%;
  ${({ theme }) => theme.mediaQ.desktop} {
    width: 75%;
  }
  ${({ theme }) => theme.mediaQ.large} {
    width: 65%;
  }
`;

const ContentWrapper = ({ children }) => {
  return <StyledContentWrapper>{children}</StyledContentWrapper>;
};

export default ContentWrapper;
