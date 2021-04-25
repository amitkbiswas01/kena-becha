import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
    reset,
    loaderSelector,
    productsSelector,
    errorSelector,
} from "./shop.slice";
import { getProducts } from "./shop.thunk";
import ShopView from "./shop.view";

import { loginSelector } from "shared/components/login/login.slice";
import { updateCart } from "client/components/cart/cart.thunk";

export default function Shop() {
    const history = useHistory();
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelector);
    const cartLoader = useSelector((state) => state.cartReducer.isLoading);
    const products = useSelector(productsSelector);
    const error = useSelector(errorSelector);
    const isLoggedIn = useSelector(loginSelector);

    useEffect(() => {
        dispatch(getProducts());
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    const viewDetails = (id) => {
        history.push(`/shop/${id}`);
    };

    const cartHandler = (id, action) => {
        dispatch(updateCart({ id: id, action: action }));
    };

    return (
        <div>
            {loader ? (
                <div>
                    <h2>Loading</h2>
                </div>
            ) : error ? (
                <h1>Error occurred!</h1>
            ) : (
                <ShopView
                    viewDetails={viewDetails}
                    products={products}
                    isLoggedIn={isLoggedIn}
                    cartHandler={cartHandler}
                    cartLoader={cartLoader}
                />
            )}
        </div>
    );
}
