import { shopReducer } from "./components/shop/shop.slice";
import { productReducer } from "./components/product/product.slice";

export const sharedReducer = {
    shopReducer: shopReducer,
    productReducer: productReducer,
};
