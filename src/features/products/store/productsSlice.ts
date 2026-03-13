import type {Category, Product} from "../../../types";
import {createSlice} from "@reduxjs/toolkit";
import {createProduct, fetchCategories, fetchProducts} from "./productsThunks.ts";

interface ProductsState {
    items: Product[];
    categories: Category[]
    fetchLoading: boolean;
    createLoading: boolean;
}


const initialState: ProductsState = {
  items: [],
  categories: [],
  fetchLoading: false,
    createLoading: false,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, {payload: products}) => {
            state.fetchLoading = false;
            state.items = products;
        });

        builder.addCase(fetchCategories.pending, (state) => {
            state.fetchLoading = true;
        });
        builder.addCase(fetchCategories.fulfilled, (state, {payload: categories}) => {
            state.fetchLoading = false;
            state.categories = categories;
        });


        builder.addCase(createProduct.pending, (state) => {
            state.createLoading = true;
        });
        builder.addCase(createProduct.fulfilled, (state) => {
            state.createLoading = false;
        });
        builder.addCase(createProduct.rejected, (state) => {
            state.createLoading = false;
        });
    }
});

export const productsReducer = productsSlice.reducer;
