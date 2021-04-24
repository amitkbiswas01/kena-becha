import { createSlice } from "@reduxjs/toolkit";

import { getProducts } from "./shopThunk";

export const initialState = {
    products: [],
    isLoading: true,
    error: null,
};

export const shopSlice = createSlice({
    name: "shop",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.products = initialState.products;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
        },
    },
    extraReducers: {
        [getProducts.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getProducts.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { reset } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.shopReducer.isLoading;
export const productsSelector = (state) => state.shopReducer.products;
export const errorSelector = (state) => state.shopReducer.error;
