import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
  },
  reducers: {
    updateWeather: (state, action) => {
      state.data = [action.payload];
    },
  },
});

export const { updateWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
