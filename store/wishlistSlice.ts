import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
  id: string | number;
  name: string;
  color: string;
  size: string;
  image: string;
  price: number;
  quantity: number;
}
interface WishlistState {
  products: Product[];
}
const initialState: WishlistState = {
  products: [],
};
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      if (!state.products.includes(action.payload)) {
        state.products.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
