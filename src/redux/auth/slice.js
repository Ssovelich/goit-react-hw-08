import { createSlice } from "@reduxjs/toolkit";
import { apiLogIn, apiLogOut, apiRefreshUser, apiRegister } from "./operations";

const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(apiRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiLogIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLogIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLogIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiLogOut.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLogOut.fulfilled, () => {
        return INITIAL_STATE;
      })
      .addCase(apiLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiRefreshUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
