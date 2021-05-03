import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { reset, loaderSelector, productSelector } from "./product.slice";
import { getSingleProduct } from "./product.thunk";
import ProductView from "./product.view";

import { updateCart } from "client/components/cart/cart.thunk";
import { loginSelector } from "shared/components/login/login.slice";
import Loader from "../loader/loader";

export default function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loader = useSelector(loaderSelector);
    const product = useSelector(productSelector);
    const isLoggedIn = useSelector(loginSelector);
    const cartLoader = useSelector((state) => state.cartReducer.isLoading);

    useEffect(() => {
        dispatch(getSingleProduct(id));
        return () => {
            dispatch(reset());
        };
    }, [dispatch, id]);

    const calcDecimal = (number) => {
        const decimal = (number - Math.floor(number))
            .toFixed(2)
            .toString()
            .replace(/^[0.]+/, ".");
        return decimal === "." ? ".0" : decimal;
    };

    const cartHandler = (id, action) => {
        dispatch(updateCart({ id: id, action: action }));
    };

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (
                <ProductView
                    product={product}
                    calcDecimal={calcDecimal}
                    cartHandler={cartHandler}
                    cartLoader={cartLoader}
                    isLoggedIn={isLoggedIn}
                />
            )}
        </div>
    );
}
