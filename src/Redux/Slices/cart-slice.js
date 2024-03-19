import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cartSlice",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const findProduct = state.find((item) => item.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity = findProduct.quantity + 1;
            }
            else {
                const clonedItem = { ...action.payload, quantity: 1 }
                state.push(clonedItem);
            }
        },
        removeFromCart(state, action) {
            return state = state.filter((item) => item.id !== action.payload.id)
        },
        clearCart(state, action) { return [] },
    },
})


export default CartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;