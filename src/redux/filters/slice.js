import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const filterReducer = filtersSlice.reducer;

export const { setFilters } = filtersSlice.actions;
