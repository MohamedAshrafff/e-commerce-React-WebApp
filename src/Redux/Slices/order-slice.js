import { createSlice } from '@reduxjs/toolkit'


const state = {
    order: [],

}

const OrderSlice = createSlice({
    name: "orderSlice",
    initialState: state,
    reducers: {
        setOrderSelected(state, action) {
            console.log(action.payload)
            return { ...state, order: action.payload }
        }
    }


})


export default OrderSlice.reducer;
export const { setOrderSelected } = OrderSlice.actions;