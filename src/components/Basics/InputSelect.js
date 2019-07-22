import React from "react";
import styled from "styled-components";

const SelectStyled = styled.select`
  font-size: 1.5rem;
  display: block;
  margin: 0.5em 0;
  padding: 0.3em 0.8em;
  border: 1px solid gray;
  border-radius: 10px;
  height: 35px;
  outline: none;
  width: 100%;
  :focus {
    border-color: green;
  }
`;
const InputLabel = styled.label`
  color: white;
  display: block;
  font-size: 1.4rem;
  white-space: nowrap;
`;

//prop data is Object {text: value}
const InputSelect = ({ data, id, label, onChange, value }) => {
  let values = Object.values(data);
  let keys = Object.keys(data);
  return (
    <div>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <SelectStyled value={value} id={id} onChange={onChange}>
        {values.map((label, index) => (
          <option key={label} value={label}>
            {keys[index]}
          </option>
        ))}
      </SelectStyled>
    </div>
  );
};

export default InputSelect;
//
