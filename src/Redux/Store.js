import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/products-slice";
import cartSlice from "./Slices/cart-slice";
import OrderSlice from "./Slices/order-slice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        lists: cartSlice,
        orders: OrderSlice,
    }
});
