import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ORDER_URL } from "utils/constants";

export const getOrders = createAsyncThunk("order/getOrders", async () => {
    const token = sessionStorage.getItem("token");

    const res = await axios.get(`${ORDER_URL}/my-order`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });

    return res.data;
});

export const createOrder = createAsyncThunk("order/createOrder", async () => {
    const token = sessionStorage.getItem("token");

    const res = await axios.get(`${ORDER_URL}/checkout`, {
        headers: {
            Accept: "application/json",
            Authorization: `bearer ${token ? token : ""}`,
        },
    });

    return res.data;
});
