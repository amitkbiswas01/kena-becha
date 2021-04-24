import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
    reset,
    loaderSelector,
    productSelector,
    errorSelector,
} from "./product.slice";
import { getSingleProduct } from "./product.thunk";
import ProductView from "./product.view";

export default function Product() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const loader = useSelector(loaderSelector);
    const product = useSelector(productSelector);
    const error = useSelector(errorSelector);

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

    return (
        <div>
            {loader ? (
                <h1>Loading ...</h1>
            ) : error ? (
                <h1>Error occurred!</h1>
            ) : (
                <ProductView product={product} calcDecimal={calcDecimal} />
            )}
        </div>
    );
}
