import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import cartSlice from "./cart-slice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice
    }
});
