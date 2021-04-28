import { createSlice } from "@reduxjs/toolkit";
import { getOrders, createOrder } from "./profile.thunk";

export const orderInitialState = {
    error: null,
    orderItems: [],
    isLoading: false,
};

export const profileSlice = createSlice({
    name: "order",
    initialState: orderInitialState,
    reducers: {},
    extraReducers: {
        [getOrders.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [getOrders.fulfilled]: (state, action) => {
            state.orderItems = action.payload || [];
            if (state.isLoading) state.isLoading = false;
        },
        [getOrders.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
        [createOrder.pending]: (state, action) => {
            if (!state.isLoading) state.isLoading = true;
        },
        [createOrder.fulfilled]: (state, action) => {
            if (state.isLoading) state.isLoading = false;
        },
        [createOrder.rejected]: (state, action) => {
            if (state.error === null) state.error = action.error;
            if (state.isLoading) state.isLoading = false;
        },
    },
});

export const profileReducer = profileSlice.reducer;

// common selectors
export const loaderSelector = (state) => state.profileReducer.isLoading;
export const ordersSelector = (state) => state.profileReducer.orderItems;
export const errorSelector = (state) => state.profileReducer.error;
