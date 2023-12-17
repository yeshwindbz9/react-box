import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// creating a store
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
