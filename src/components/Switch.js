import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { themeActions } from "../redux/store";

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

function Switch() {
  const dispatch = useDispatch();
  // const theme = useSelector((state) => state.theme);

  const lightThemeHandler = () => {
    dispatch(themeActions.lightTheme());
  };

  const darkThemeHandler = () => {
    dispatch(themeActions.darkTheme());
  };

  const modernThemeHandler = () => {
    dispatch(themeActions.modernTheme());
  };

  return (
    // <StyledSwitch>
    //   <input type="checkbox" />
    //   <span />
    // </StyledSwitch>
    <form>
      <input type='checkbox' onClick={darkThemeHandler} />
      <input type='checkbox' onClick={lightThemeHandler} />
      <input type='checkbox' onClick={modernThemeHandler} />
      {/* <button onClick={lightThemeHandler}>L</button>
      <button onClick={modernThemeHandler}>M</button> */}
    </form>
  );
}

export default Switch;
