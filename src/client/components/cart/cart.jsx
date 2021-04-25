import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loaderSelector, cartItemsSelector } from "./cart.slice";
import { getCartItems, updateCart } from "./cart.thunk";
import CartView from "./cart.view";

export default function Cart() {
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelector);
    const cartItems = useSelector(cartItemsSelector);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    const cartHandler = (id, action) => {
        dispatch(updateCart({ id: id, action: action }));
    };

    return (
        <div>
            <CartView
                loader={loader}
                cartItems={cartItems}
                cartHandler={cartHandler}
            />
        </div>
    );
}
