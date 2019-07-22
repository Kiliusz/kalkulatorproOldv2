import React from "react";
import styled from "styled-components";

const StyledResult = styled.p`
  color: white;
  /* margin: 0.7rem 0; */
`;

const DisplayResults = ({ result, isRoundDuct }) => {
  if (result) {
    return result.map((item) => {
      return (
        <StyledResult
          style={item.isAboveAcceptable ? { color: "red" } : null}
          key={Math.random()}
        >
          {isRoundDuct ? "φ" : ""}
          {item.diameter} &nbsp; - &nbsp;{item.pressureDrop} Pa/m &nbsp;-&nbsp;
          {item.speed} m/s
        </StyledResult>
      );
    });
  } else {
    return false;
  }
};

export default DisplayResults;
