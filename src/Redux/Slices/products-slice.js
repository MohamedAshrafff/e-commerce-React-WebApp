import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllProducts = createAsyncThunk('/productsSlice/fetchProducts', async () => {
    const res = await fetch('http://localhost:9000/products')
    const data = await res.json()
    return data
})

const ProductsSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            return action.payload
        })
    },
})

export default ProductsSlice.reducer;
export const { } = ProductsSlice.actions;