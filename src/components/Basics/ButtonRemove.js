import React from "react";
import styled from "styled-components";

const StyledRemoveButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  padding: 1.6rem;
  background: ${({ theme }) => theme.graylight};
  border-radius: 999rem;
  font-size: 1.5rem;
  transform: rotate(45deg);
  :hover {
    background: ${({ theme }) => theme.grayextralight};
  }
  &:after,
  &:before {
    content: "";
    display: block;
    background-color: ${({ theme }) => theme.graydark};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:before {
    height: 1.7rem;
    width: 0.2rem;
  }

  &:after {
    height: 0.2rem;
    width: 1.7rem;
  }
`;

const ButtonRemove = (props) => (
  <StyledRemoveButton className={props.className} onClick={props.onClick} />
);

export default ButtonRemove;
