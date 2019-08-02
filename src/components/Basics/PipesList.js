import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  margin: 0;
`;

const PipesList = ({ pipes }) => {
  return (
    <>
      {Object.entries(pipes).map(([key, value]) => {
        return (
          <StyledP key={key}>
            {key} - Dw {value}
          </StyledP>
        );
      })}
    </>
  );
};

export default PipesList;
