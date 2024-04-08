import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const api_URL = 'https://fakestoreapi.com'

const state = {
    items: [],
    categories: [],
    itemsInCategory: [],
    fulfilled: false,
    failed: false,
    loading: false,
    selectedCategory: 'All',
    product: {}
}


export const getAllProducts = createAsyncThunk('/productsSlice/fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})

export const getProductsInCategory = createAsyncThunk('/productsSlice/fetchProductsInCategory', async (catName) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${catName}`)
    const data = await res.json()
    return data
})

export const getCategories = createAsyncThunk('/productsSlice/fetchCategories', async () => {
    const res = await fetch(`${api_URL}/products/categories`)
    const data = await res.json()
    return data
})

export const getProduct = createAsyncThunk('/productsSlice/fetchProduct', async (id) => {
    const res = await fetch(`${api_URL}/products/${id}`)
    const data = await res.json()
    return data
})


const ProductsSlice = createSlice({
    name: "productsSlice",
    initialState: state,
    reducers: {
        setCategory: (state, action) => {
            state.selectedCategory = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            return {
                ...state,
                loading: true,
                failed: false,
                fulfilled: false,
                items: []
            }
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                failed: false,
                fulfilled: true,
                items: action.payload
            }
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                failed: true,
                fulfilled: false,
                items: []
            }
        });
        builder.addCase(getProductsInCategory.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                failed: false,
                fulfilled: true,
                itemsInCategory: action.payload
            }
        });
        builder.addCase(getProductsInCategory.pending, (state, action) => {
            return {
                ...state,
                loading: true,
                failed: false,
                fulfilled: false,
                itemsInCategory: []
            }
        });
        builder.addCase(getProductsInCategory.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                failed: true,
                fulfilled: false,
                itemsInCategory: []
            }
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            return {
                ...state,
                loading: false,
                failed: false,
                fulfilled: true,
                categories: action.payload
            }
        });
        builder.addCase(getCategories.pending, (state, action) => {
            return {
                ...state,
                loading: true,
                failed: false,
                fulfilled: false,
                categories: []
            }
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                failed: true,
                fulfilled: false,
                categories: []
            }
        });
        builder.addCase(getProduct.fulfilled, (state, action) => {
            return {
                ...state,
                productLoading: false,
                product: action.payload
            }
        });
        builder.addCase(getProduct.pending, (state, action) => {
            return {
                ...state,
                productLoading: true,
                product: {}
            }
        });
        builder.addCase(getProduct.rejected, (state, action) => {
            return {
                ...state,
                productLoading: false,
                product: {}
            }
        });
    },
})

export default ProductsSlice.reducer;
export const { setCategory } = ProductsSlice.actions;