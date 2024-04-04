import { createSlice } from "@reduxjs/toolkit";

const state = {
    cart: [],
    cartFound: false,
}
const CartSlice = createSlice({
    name: "cartSlice",
    initialState: state,
    reducers: {
        addToCart(state, action) {
            const findProduct = state.cart.find((item) => item.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity = findProduct.quantity + 1;
            }
            else {
                const clonedItem = { ...action.payload, quantity: 1 }
                state.cartFound = true;
                state.cart.push(clonedItem);
            }
        },
        removeFromCart(state, action) {
            const clonedCart = state.cart.filter((item) => item.id !== action.payload.id)
            return { ...state, cart: clonedCart }
        },
        clearCart(state, action) {

            return { ...state, cart: [] }
        },
    },
})


export default CartSlice.reducer;
export const { addToCart, removeFromCart, clearCart, addToFavourites } = CartSlice.actions;