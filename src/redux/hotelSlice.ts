import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Hotel, HotelInitial } from "../types/model";
import hotels from "../hotels.json";

export const getHotelsAsync = createAsyncThunk(
  "get/hotels",
  async (): Promise<Hotel[]> => {
    return hotels;
  }
);

const initialState: HotelInitial = {
  hotels: [],
  pending: false,
  error: false,
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    addHotel: (state, action) => {
      state.hotels = [...state.hotels, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHotelsAsync.fulfilled, (state, { payload }) => {
      state.hotels = payload;
      state.pending = false;
      state.error = false;
    });
    builder.addCase(getHotelsAsync.pending, (state) => {
      state.pending = true;
    });
    builder.addCase(getHotelsAsync.rejected, (state) => {
      state.error = true;
      state.pending = false;
    });
  },
});

export const { addHotel } = hotelSlice.actions;
export default hotelSlice.reducer;
