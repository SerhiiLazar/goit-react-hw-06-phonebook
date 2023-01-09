import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: '',
};

const filtersSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
      setFilter(state, action) {
        state.value = action.payload;
      },
    },
  });
 
  export const { setFilter } = filtersSlice.actions;
  export const filtersReducer = filtersSlice.reducer;

  export const getFilter = state => state.filter.value;