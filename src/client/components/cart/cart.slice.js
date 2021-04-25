import { createSlice } from "@reduxjs/toolkit";
import { getCartItems, updateCart } from "./cart.thunk";

export const cartInitialState = {
    error: null,
    cartItems: [],
    isLoading: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: cartInitialState,
    reducers: {},
    extraReducers: {
        [getCartItems.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.cartItems = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [getCartItems.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [updateCart.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [updateCart.fulfilled]: (state, action) => {
            state.cartItems = action.payload;
            if (state.isLoading) state.isLoading = false;
        },
        [updateCart.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const cartReducer = cartSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.cartReducer.isLoading;
export const cartItemsSelector = (state) => state.cartReducer.cartItems;
export const errorSelector = (state) => state.cartReducer.error;
