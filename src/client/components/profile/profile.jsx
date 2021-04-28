import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loaderSelector, ordersSelector } from "./profile.slice";
import { getOrders } from "./profile.thunk";
import ProfileView from "./profile.view";

export default function Profile() {
    const dispatch = useDispatch();
    const loader = useSelector(loaderSelector);
    const orderItems = useSelector(ordersSelector);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch]);

    return (
        <div>
            <ProfileView loader={loader} orderItems={orderItems} />
        </div>
    );
}
