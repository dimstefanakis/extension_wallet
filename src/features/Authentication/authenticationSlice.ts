import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "./interface";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: <AuthenticationState>{
    isLoggedIn: false,
    account: {},
    // verification page needs to know which method the user registered
    registerType: "email",
    // user might switch between phone and email tabs so we need to keep both values
    registerValue: {
      email: "",
      phone: "",
    },
    loading: false,
  },
  reducers: {
    setRegisterType: (state, action) => {
      state.registerType = action.payload;
    },
    setRegisterValue: (state, action) => {
      state.registerValue = action.payload;
    },
    setRegisterEmailValue: (state, action) => {
      state.registerValue.email = action.payload;
    },
    setRegisterPhoneValue: (state, action) => {
      state.registerValue.phone = action.payload;
    },
    setAccount: (state, action) => {
      state.account = action.payload;
      // this obviously shouldn't work like this but for the sake of the exercise
      // I assume that setAccount always works
      state.isLoggedIn = true;
      localStorage.setItem('loggedIn', 'true');
    }
  },
});

export const {
  setRegisterType,
  setRegisterValue,
  setRegisterEmailValue,
  setRegisterPhoneValue,
  setAccount,
} = authenticationSlice.actions;
