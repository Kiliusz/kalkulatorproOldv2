import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  background-color: ${({ theme }) => theme.primarygreen};
  color: white;
  padding: 10px 20px;
  font-size: 1.4rem;
  border: none;
  margin: 5px 15px 15px 0;
  cursor: pointer;
  text-transform: uppercase;
  :hover {
    background-color: #005950;
  }
`;

const Button = ({ id, text, onClick, className }) => (
  <StyledButton className={className} id={id} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
