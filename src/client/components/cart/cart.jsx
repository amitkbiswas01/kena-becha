import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { loaderSelector, cartItemsSelector, resetCart } from "./cart.slice";
import { getCartItems, updateCart } from "./cart.thunk";
import CartView from "./cart.view";

import { PROFILE } from "utils/constants";
import { createOrder } from "../profile/profile.thunk";

export default function Cart() {
    const dispatch = useDispatch();
    const history = useHistory();
    const loader = useSelector(loaderSelector);
    const cartItems = useSelector(cartItemsSelector);

    useEffect(() => {
        dispatch(getCartItems());
    }, [dispatch]);

    const cartHandler = (id, action) => {
        dispatch(updateCart({ id: id, action: action }));
    };

    const checkoutHandler = async () => {
        await dispatch(createOrder());
        history.push(PROFILE);
        await dispatch(resetCart());
    };

    return (
        <div>
            <CartView
                loader={loader}
                cartItems={cartItems}
                cartHandler={cartHandler}
                checkoutHandler={checkoutHandler}
            />
        </div>
    );
}
