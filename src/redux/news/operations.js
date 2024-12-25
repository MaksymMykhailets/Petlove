import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page = 1, perPage = 10 }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/news", {
        params: { page, perPage },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);