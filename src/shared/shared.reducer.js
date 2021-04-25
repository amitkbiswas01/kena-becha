import { shopReducer } from "./components/shop/shop.slice";
import { productReducer } from "./components/product/product.slice";
import { loginReducer } from "./components/login/login.slice";
import { signupReducer } from "./components/signup/signup.slice";

export const sharedReducer = {
    shopReducer: shopReducer,
    productReducer: productReducer,
    loginReducer: loginReducer,
    signupReducer: signupReducer,
};
