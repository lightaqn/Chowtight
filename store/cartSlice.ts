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
interface CartState {
  products: Product[];
  sum: number;
}
const initialState: CartState = { products: [], sum: 0 };
// const calculateSum = (products: CartState) => {
//   state.products.reduce((acc: number, product: Product) => {
//     return acc + product.price * product.quantity;
//   }, 0);
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const productIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity += action.payload.quantity;
        if (state.products[productIndex].quantity < 1) {
          state.products.splice(productIndex, 1);
        }
      } else {
        state.products.push(action.payload);
      }
      state.sum = state.products.reduce((acc: number, product: Product) => {
        return acc + product.price * product.quantity;
      }, 0);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.sum = state.products.reduce((acc: number, product: Product) => {
        return acc + product.price * product.quantity;
      }, 0);
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
