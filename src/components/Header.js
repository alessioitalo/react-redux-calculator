import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Switch from "./Switch";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
function Header() {
  const theme = useSelector((state) => state.theme);

  return (
    <StyledHeader className={theme.theme}>
      <h2>calc</h2>
      <Switch />
    </StyledHeader>
  );
}

export default Header;
