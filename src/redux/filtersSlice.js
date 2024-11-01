import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: "",
};

// Створюємо slice
const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

//Генеруємо reducer
export const filterReducer = filtersSlice.reducer;
//Генеруємо функцію команди
export const { setFilters } = filtersSlice.actions;
