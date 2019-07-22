import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin: 0 0 1rem 0;
  font-size: 1.6rem;
  line-height: 2.5rem;
  color: ${({ theme }) => theme.grayextralight};

  span {
    margin: 0 1rem 0 1rem;
    padding: 0 0.6rem 0 0.6rem;
    border-left: 2px solid ${({ theme }) => theme.primarygreen};
    border-right: 2px solid ${({ theme }) => theme.primarygreen};
  }
`;

const ResultSubHeader = ({ children }) => <StyledP>{children}</StyledP>;

export default ResultSubHeader;
