import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../../axiosApi.ts";
import type {Category, Product, ProductMutation} from "../../../types";

export const fetchProducts = createAsyncThunk<Product[], void>(
    'products/fetchProducts',
    async () => {
        const response = await axiosApi.get<Product[]>('/products');
        return response.data || [];
    }
);

export const fetchCategories = createAsyncThunk<Category[], void>(
    'products/fetchCategories',
    async () => {
        const response = await axiosApi.get<Category[]>('/categories');
        return response.data || [];
    }
);

export const deleteProductById = createAsyncThunk<void, string>(
    'products/deleteProductById',
    async (id) => {
        await axiosApi.delete('/products/' + id);
    }
);

export const createProduct = createAsyncThunk<void, ProductMutation>(
    'products/createProduct',
    async (productMutation) => {
        const formData = new FormData();

        // formData.append('title', productMutation.title);
        // formData.append('price', productMutation.price);
        // formData.append('description', productMutation.description);
        //
        // if (productMutation.image) {
        //     formData.append('image', productMutation.image);
        // }


        const keys = Object.keys(productMutation) as (keyof ProductMutation)[];
        keys.forEach((key) => {
            const value = productMutation[key];

            if (value !== null) {
                formData.append(key, value);
            }
        });

        await axiosApi.post('/products', formData);
    }
);