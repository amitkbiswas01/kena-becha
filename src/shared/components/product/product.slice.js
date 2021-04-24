import { createSlice } from "@reduxjs/toolkit";

import { getSingleProduct } from "./product.thunk";

export const initialState = {
    product: {},
    isLoading: true,
    error: null,
};

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.product = initialState.product;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
        },
    },
    extraReducers: {
        [getSingleProduct.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getSingleProduct.fulfilled]: (state, action) => {
            state.product = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getSingleProduct.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const { reset } = productSlice.actions;
export const productReducer = productSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.productReducer.isLoading;
export const productSelector = (state) => state.productReducer.product;
export const errorSelector = (state) => state.productReducer.error;
