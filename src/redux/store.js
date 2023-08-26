import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import locationReducer from "../redux/location/locationSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationReducer,
  },
});
