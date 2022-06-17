import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./hotelSlice";

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
