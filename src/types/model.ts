export type Hotel = {
  id: number;
  name: string;
  location: string;
  price: number;
  img: string;
  rate: number;
  created_at: number;
  updated_at: number;
};

export type HotelInitial = {
  hotels: Hotel[];
  pending: boolean;
  error: boolean;
};
