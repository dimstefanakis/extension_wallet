import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "./interface";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: <AuthenticationState>{
    isLoggedIn: false,
    registerType: "email",
    registerValue: "",
    loading: false,
  },
  reducers: {
    setRegisterType: (state, action) => {
      state.registerType = action.payload;
    },
    setRegisterValue: (state, action) => {
      state.registerValue = action.payload;
    },
  },
});

export const { setRegisterType, setRegisterValue } = authenticationSlice.actions;
