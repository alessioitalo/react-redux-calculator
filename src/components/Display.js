import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledDisplay = styled.div`
  height: 2rem;
  font-size: 2rem;
  text-align: right;
  margin: 1.5rem 0;
  padding: 2rem 0.5rem;
  border-radius: 5px;
  ${'' /* overflow-x: auto; */}
  ${'' /* overflow-y: hidden; */}

  &.dark {
    background-color: hsl(224, 36%, 15%);
  }

  &.light {
    background-color: hsl(0, 0%, 93%);
  }

  &.modern {
    background-color: hsl(268, 71%, 12%);
  }
`;

function Display() {
  const calculator = useSelector((state) => state.calculator);
  const theme = useSelector((state) => state.theme);

  return (
    <StyledDisplay className={theme.theme}>{calculator.string}</StyledDisplay>
  );
}

export default Display;
