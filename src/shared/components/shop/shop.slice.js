import { createSlice } from "@reduxjs/toolkit";

import { getProducts } from "./shop.thunk";

export const shopInitialState = {
    products: [],
    isLoading: true,
    error: null,
};

export const shopSlice = createSlice({
    name: "shop",
    initialState: shopInitialState,
    reducers: {
        reset: (state) => {
            state.products = shopInitialState.products;
            state.isLoading = shopInitialState.isLoading;
            state.error = shopInitialState.error;
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
