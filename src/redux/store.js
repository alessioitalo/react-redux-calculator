import { configureStore, createSlice } from "@reduxjs/toolkit";
import { evaluate } from "mathjs";

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark" },
  reducers: {
    lightTheme(state) {
      state.theme = "light";
    },
    modernTheme(state) {
      state.theme = "modern";
    },
    darkTheme(state) {
      state.theme = "dark";
    },
  },
});

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: { string: "" },
  reducers: {
    evaluate(state) {
      state.string = (evaluate(state.string)).toString();
    },
    add(state, action) {
      state.string = state.string + action.payload;
    },
    clean(state) {
      state.string = state.string.replace(/([*/+-])+/g, "$1");
    },
    reset(state) {
      state.total = 0;
      state.string = "";
    },
    delete(state) {
      state.string = state.string.slice(0, -1);
    },
  },
});

const Store = configureStore({
  reducer: { theme: themeSlice.reducer, calculator: calculatorSlice.reducer },
});

export const themeActions = themeSlice.actions;
export const calculatorActions = calculatorSlice.actions;
export default Store;
