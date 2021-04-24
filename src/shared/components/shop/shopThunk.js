import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { PRODUCTS_URL } from "shared/constants";

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        const res = await axios.get(PRODUCTS_URL);
        return res.data;
    },
);
