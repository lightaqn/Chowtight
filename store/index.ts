import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import toggleReducer from "./toggleSlice";
import wishlistReducer from "./wishlistSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    toggle: toggleReducer,
    wishlist: wishlistReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
