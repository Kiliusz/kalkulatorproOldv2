import React from "react";
import styled from "styled-components";

const StyledAddButton = styled.button`
  border: none;
  margin: 0.1rem 0;
  cursor: pointer;
  padding: 1.8rem;
  background: ${({ theme }) => theme.primarygreen};
  border-radius: 999rem;
  position: relative;
  width: 30px;
  height: 30px;
  :hover {
    background: #005950;
  }
  &:after,
  &:before {
    content: "";
    display: block;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    height: 1.8rem;
    width: 0.2rem;
  }

  &:after {
    height: 0.2rem;
    width: 1.8rem;
  }
`;

const ButtonAdd = (props) => {
  return <StyledAddButton onClick={props.onClick} />;
};

export default ButtonAdd;
