import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import hotels from "../hotels.json";
import { Hotel, HotelInitial } from "../types/model";
import { FILTER_TYPES } from "../types/enums";
import { getItemsFromStorage, setItemToStorage } from "../utils/storage";
import { sleep } from "../utils/utils";

export const getHotelsAsync = createAsyncThunk(
  "get/hotels",
  async (): Promise<Hotel[]> => {
    await sleep(1000);
    const storedHotels = getItemsFromStorage();

    if (JSON.parse(storedHotels || "[]").length > 0)
      return JSON.parse(storedHotels || "[]");

    const sortedHotels = hotels.sort((a, b) => b.updated_at - a.updated_at);
    setItemToStorage(JSON.stringify(sortedHotels));
    return sortedHotels;
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

      setItemToStorage(JSON.stringify(state.hotels));
    },
    increaseRate: (state, action) => {
      state.hotels = state.hotels.map((hotel) => {
        if (hotel.id === action.payload) {
          return {
            ...hotel,
            rate: hotel.rate + 1,
            updated_at: new Date().getTime(),
          };
        }
        return hotel;
      });

      setItemToStorage(JSON.stringify(state.hotels));
    },
    decreaseRate: (state, action) => {
      state.hotels = state.hotels.map((hotel) => {
        if (hotel.id === action.payload) {
          return {
            ...hotel,
            rate: hotel.rate - 1,
            updated_at: new Date().getTime(),
          };
        }
        return hotel;
      });

      setItemToStorage(JSON.stringify(state.hotels));
    },
    filterHotels: (state, action) => {
      state.hotels = [...state.hotels].sort((a, b) => {
        if (action.payload === FILTER_TYPES.LOWEST_RATE) {
          if (a.rate === b.rate) {
            return b.updated_at - a.updated_at;
          }
          return a.rate - b.rate;
        }
        if (action.payload === FILTER_TYPES.HIGHEST_RATE) {
          if (a.rate === b.rate) {
            return b.updated_at - a.updated_at;
          }
          return b.rate - a.rate;
        }
        if (action.payload === FILTER_TYPES.LOWEST_PRICE) {
          if (a.price === b.price) {
            return b.updated_at - a.updated_at;
          }
          return a.price - b.price;
        }
        if (action.payload === FILTER_TYPES.HIGHEST_PRICE) {
          if (a.price === b.price) {
            return b.updated_at - a.updated_at;
          }
          return b.price - a.price;
        }

        return b.updated_at - a.updated_at;
      });

      setItemToStorage(JSON.stringify(state.hotels));
    },
    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      );

      setItemToStorage(JSON.stringify(state.hotels));
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

export const {
  addHotel,
  increaseRate,
  decreaseRate,
  filterHotels,
  deleteHotel,
} = hotelSlice.actions;
export default hotelSlice.reducer;
