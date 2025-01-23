import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  category: "",
  gender: "",
  type: "",
  location: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    resetFilters(state) {
      state.searchQuery = "";
      state.category = "";
      state.gender = "";
      state.type = "";
      state.location = "";
    },
  },
});

export const {
  setSearchQuery,
  setCategory,
  setGender,
  setType,
  setLocation,
  resetFilters,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;