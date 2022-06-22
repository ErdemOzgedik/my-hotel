import { MY_HOTEL_STORAGE_KEY } from "../types/constants";

export const setItemToStorage = (hotels: string) => {
  localStorage.setItem(MY_HOTEL_STORAGE_KEY, hotels);
};

export const getItemsFromStorage = (): string | null => {
  return localStorage.getItem(MY_HOTEL_STORAGE_KEY);
};
