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

export default function Shop() {
    const history = useHistory();
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelector);
    const products = useSelector(productsSelector);
    const error = useSelector(errorSelector);

    useEffect(() => {
        dispatch(getProducts());
        return () => {
            dispatch(reset());
        };
    }, [dispatch]);

    const viewDetails = (id) => {
        history.push(`/shop/${id}`);
    };

    return (
        <div>
            {loader ? (
                <h1>Loading ...</h1>
            ) : error ? (
                <h1>Error occurred!</h1>
            ) : (
                <ShopView viewDetails={viewDetails} products={products} />
            )}
        </div>
    );
}
