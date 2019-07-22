import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  font-size: 1.5rem;
  margin: 0.5em 0;
  padding: 0.3em 0.8em;
  border: 1px solid gray;
  border-radius: 10px;
  height: 35px;
  outline: none;
  width: 100%;
  margin-right: 1em;
  :focus {
    border-width: 2px;
    border-color: black;
  }
`;

const InputLabel = styled.label`
  color: white;
  display: block;
  font-size: 1.4rem;
  white-space: nowrap;
`;

const InputNum = ({ id, labelVal, onChange, value }) => (
  <div>
    <InputLabel htmlFor={id}>{labelVal}</InputLabel>
    <InputStyled value={value} onChange={onChange} type="number" id={id} />
  </div>
);

export default InputNum;
