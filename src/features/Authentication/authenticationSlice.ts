import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "./interface";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: <AuthenticationState>{
    isLoggedIn: false,
    loading: false,
  },
  reducers: {},
});
