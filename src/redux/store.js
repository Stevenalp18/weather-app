import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counter/counterSlice";
import locationReducer from "../redux/location/locationSlice";
import weatherReducer from "../redux/weather/weatherSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    location: locationReducer,
    weather: weatherReducer,
  },
});
