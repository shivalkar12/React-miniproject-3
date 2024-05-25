import React, { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({setError,error,selectteNumber,setSelectedNumber}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

const numberSelectorHandler=(value)=>{
    setSelectedNumber(value);
    setError("");
}
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value == selectteNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 30px;
overflow: hidden;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error{
    color: red;
  }
  
`;
const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-right: 10px;
  overflow: hidden;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
