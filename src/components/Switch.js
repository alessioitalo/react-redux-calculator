import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../redux/store";

const StyledSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: baseline;

  & div {
    text-align: right;
  }

  & span {
    font-size: 11px;
    position: relative;
    bottom: 1px;
    right: 5px;
  }

  .numbers {
    letter-spacing: 5px;
    font-size: 11px;
  }

  & input {
    -webkit-appearance: none;
    width: 52px;
    border-radius: 15px;
  }

  & input:focus,
  input:active {
    border: none;
  }

  & input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 10px;
    overflow: visible;
    cursor: pointer;
  }

  .dark {
    background-color: hsl(223, 31%, 20%);
  }

  .dark::-webkit-slider-thumb {
    background-color: hsl(6, 63%, 50%);
  }

  .light {
    background-color: hsl(0, 5%, 81%);
  }

  .light::-webkit-slider-thumb {
    background-color: hsl(25, 98%, 40%);
  }

  .modern {
    background-color: hsl(268, 71%, 12%);
  }

  .modern::-webkit-slider-thumb {
    background-color: hsl(176, 100%, 44%);
  }
`;

function Switch() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const changeThemeHandler = (e) => {
    switch (e.target.value) {
      case "1":
        dispatch(themeActions.darkTheme());
        break;
      case "2":
        dispatch(themeActions.lightTheme());
        break;
      default:
        dispatch(themeActions.modernTheme());
    }
  };

  return (
    <StyledSwitch>
      <div className="numbers">1 2 3</div>
      <div>
        <span>THEME</span>
        <input
          className={theme.theme}
          type="range"
          min="1"
          max="3"
          step="1"
          defaultValue="1"
          onChange={changeThemeHandler}
        />
      </div>
    </StyledSwitch>
  );
}

export default Switch;
