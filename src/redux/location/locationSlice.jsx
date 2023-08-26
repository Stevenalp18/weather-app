import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    value: "alexandria, va",
  },
  reducers: {
    updateLocation: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateLocation } = locationSlice.actions;

export default locationSlice.reducer;
