import { MY_HOTEL_STORAGE_KEY } from "../../types/constants";

export const setItemToStorage = (hotels: string) => {
  console.log("====================================");
  console.log("item set");
  console.log("====================================");
  localStorage.setItem(MY_HOTEL_STORAGE_KEY, hotels);
};

export const getItemsFromStorage = (): string | null => {
    console.log('====================================');
    console.log('item get');
    console.log('====================================');
  return localStorage.getItem(MY_HOTEL_STORAGE_KEY);
};
