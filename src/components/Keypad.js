import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculatorActions } from "../redux/store";
import styled from "styled-components";

const StyledKeyboard = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  border-radius: 5px;

  &.dark {
    background-color: hsl(223, 31%, 20%);
  }

  &.light {
    background-color: hsl(0, 5%, 81%);
  }

  &.modern {
    background-color: hsl(268, 71%, 12%);
  }

  & .large-btn {
    grid-column: span 2;
  }

  &.dark .num-btn {
    background-color: hsl(30, 25%, 89%);
    box-shadow: 0 2px 1px 1px hsl(28, 16%, 65%);
    color: hsl(60, 10%, 19%);
  }

  &.light .num-btn {
    background-color: hsl(45, 7%, 89%);
    box-shadow: 0 2px 1px 1px hsl(35, 11%, 61%);
    color: hsl(60, 10%, 19%);
  }

  &.modern .num-btn {
    background-color: hsl(268, 47%, 21%);
    box-shadow: 0 2px 1px 1px hsl(290, 70%, 36%);
    color: hsl(52, 100%, 62%);
  }

  &.dark .equal {
    background-color: hsl(6, 63%, 50%);
    box-shadow: 0 2px 1px 1px hsl(6, 70%, 34%);
  }

  &.light .equal {
    background-color: hsl(25, 98%, 40%);
    box-shadow: 0 2px 1px 1px hsl(25, 99%, 27%);
    color: white;
  }

  &.modern .equal {
    background-color: hsl(176, 100%, 44%);
    box-shadow: 0 2px 1px 1px hsl(177, 92%, 70%);
    color: hsl(198, 20%, 13%);
  }

  &.dark .special {
    background-color: hsl(225, 21%, 49%);
    box-shadow: 0 2px 1px 1px hsl(224, 28%, 35%);
  }

  &.light .special {
    background-color: hsl(185, 42%, 37%);
    box-shadow: 0 2px 1px 1px hsl(185, 58%, 25%);
    color: white;
  }

  &.modern .special {
    background-color: hsl(281, 89%, 26%);
    box-shadow: 0 2px 1px 1px hsl(285, 91%, 52%);
  }
`;

function Keypad() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    const digit = e.target.value;
    dispatch(calculatorActions.add(digit));
    dispatch(calculatorActions.clean());
  };

  const calculateHandler = () => {
    try {
      dispatch(calculatorActions.evaluate());
    } catch {
      dispatch(calculatorActions.reset());
    }
  };

  const resetHandler = () => {
    dispatch(calculatorActions.reset());
  };

  const deleteHandler = () => {
    dispatch(calculatorActions.delete());
  };

  return (
    <StyledKeyboard className={theme.theme}>
      {/* <div> */}
      <button
        value="7"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        7
      </button>
      <button
        value="8"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        8
      </button>
      <button
        value="9"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        9
      </button>
      <button className={`${theme.theme} special`} onClick={deleteHandler}>
        DEL
      </button>
      {/* </div>
      <div> */}
      <button
        value="4"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        4
      </button>
      <button
        value="5"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        5
      </button>
      <button
        value="6"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        6
      </button>
      <button
        value="+"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        +
      </button>
      {/* </div>
      <div> */}
      <button
        value="1"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        1
      </button>
      <button
        value="2"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        2
      </button>
      <button
        value="3"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        3
      </button>
      <button
        value="-"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        -
      </button>
      {/* </div>
      <div> */}
      <button
        value="."
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        .
      </button>
      <button
        value="0"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        0
      </button>
      <button
        value="/"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        /
      </button>
      <button
        value="*"
        className={`${theme.theme} num-btn`}
        onClick={clickHandler}
      >
        x
      </button>
      {/* </div> */}
      {/* <div className="large-buttons"> */}
      <button
        className={`${theme.theme} large-btn special`}
        onClick={resetHandler}
      >
        RESET
      </button>
      <button
        onClick={calculateHandler}
        className={`${theme.theme} large-btn equal`}
      >
        {" "}
        ={" "}
      </button>
      {/* </div> */}
    </StyledKeyboard>
  );
}

export default Keypad;
