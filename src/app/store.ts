import {configureStore} from "@reduxjs/toolkit";
import {productsReducer} from "../features/products/store/productsSlice.ts";
import {categoriesReducer} from "../features/categories/store/categoriesSlice.ts";


export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;