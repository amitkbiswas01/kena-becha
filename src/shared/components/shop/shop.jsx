import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

import { reset, loaderSelector, productsSelector } from "./shop.slice";
import { getProducts } from "./shop.thunk";
import ShopView from "./shop.view";

import Loader from "../loader/loader";
import { loginSelector } from "../login/login.slice";
import { updateCart } from "client/components/cart/cart.thunk";
import { getAllCategories } from "admin/components/categories/categories.thunk";
import { categoriesSelector } from "admin/components/categories/categories.slice";

export default function Shop() {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useLocation();
    const loader = useSelector(loaderSelector);
    const cartLoader = useSelector((state) => state.cartReducer.isLoading);
    const products = useSelector(productsSelector);
    const isLoggedIn = useSelector(loginSelector);
    const categories = useSelector(categoriesSelector);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getAllCategories());
        return () => {
            dispatch(reset());
        };
    }, [dispatch, location]);

    const viewDetails = (id) => {
        history.push(`/shop/${id}`);
    };

    const cartHandler = (id, action) => {
        dispatch(updateCart({ id: id, action: action }));
    };

    return (
        <div>
            {loader ? (
                <Loader />
            ) : (
                <ShopView
                    viewDetails={viewDetails}
                    products={products}
                    isLoggedIn={isLoggedIn}
                    cartHandler={cartHandler}
                    cartLoader={cartLoader}
                    categories={categories}
                />
            )}
        </div>
    );
}
