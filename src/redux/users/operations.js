import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAuthHeader, clearAuthHeader } from "../api";

const prepareAuthHeader = (thunkAPI) => {
  const token = thunkAPI.getState().auth.token;
  if (!token) {
    throw new Error("Token is missing");
  }
  setAuthHeader(token);
};

export const signup = createAsyncThunk(
  "users/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/signup", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  "users/signin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/signin", credentials);
      const { token, ...userData } = response.data;
      setAuthHeader(token);
      return { token, userData };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const signout = createAsyncThunk(
  "users/signout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/users/signout");
      clearAuthHeader();
      return response.data.message;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/current",
  async (_, thunkAPI) => {
    try {
      prepareAuthHeader(thunkAPI);
      const response = await axiosInstance.get("/users/current");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getCurrentUserFullInfo = createAsyncThunk(
  "users/current/full",
  async (_, thunkAPI) => {
    try {
      prepareAuthHeader(thunkAPI);
      const response = await axiosInstance.get("/users/current/full");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);