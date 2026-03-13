import type {RootState} from "../../../app/store.ts";

export const selectProducts = (state: RootState) => state.products.items;
export const selectProductsLoading = (state: RootState) => state.products.fetchLoading;
export const selectCreateProductLoading = (state: RootState) => state.products.createLoading;
export const selectCategories = (state: RootState) => state.products.categories;