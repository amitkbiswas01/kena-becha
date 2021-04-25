import { shopReducer } from "./components/shop/shop.slice";
import { productReducer } from "./components/product/product.slice";
import { loginReducer } from "./components/login/login.slice";

export const sharedReducer = {
    shopReducer: shopReducer,
    productReducer: productReducer,
    loginReducer: loginReducer,
};
