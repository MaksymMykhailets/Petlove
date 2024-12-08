import { createSlice } from "@reduxjs/toolkit";
import {
  signup,
  signin,
  signout,
  getCurrentUser,
  getCurrentUserFullInfo,
} from "./operations";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const setLoading = (state) => {
  state.isLoading = true;
  state.error = null;
};

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const setSuccess = (state) => {
  state.isLoading = false;
};

const setAuthData = (state, action) => {
  state.isLoading = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // Signup
      .addCase(signup.pending, setLoading)
      .addCase(signup.fulfilled, (state, action) => setAuthData(state, action))
      .addCase(signup.rejected, setError)

      // Signin
      .addCase(signin.pending, setLoading)
      .addCase(signin.fulfilled, (state, action) => setAuthData(state, action))
      .addCase(signin.rejected, setError)

      // Signout
      .addCase(signout.pending, setLoading)
      .addCase(signout.fulfilled, (state) => {
        setSuccess(state);
        state.user = null;
        state.token = null;
      })
      .addCase(signout.rejected, setError)

      // Get Current User
      .addCase(getCurrentUser.pending, setLoading)
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        setSuccess(state);
        state.user = action.payload;
      })
      .addCase(getCurrentUser.rejected, setError)

      // Get Current User Full Info
      .addCase(getCurrentUserFullInfo.pending, setLoading)
      .addCase(getCurrentUserFullInfo.fulfilled, (state, action) => {
        setSuccess(state);
        state.user = action.payload;
      })
      .addCase(getCurrentUserFullInfo.rejected, setError);
  },
});

export const usersReducer = usersSlice.reducer;
