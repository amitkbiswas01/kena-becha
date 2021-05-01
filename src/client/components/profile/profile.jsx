import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
    useRouteMatch,
} from "react-router-dom";
import ProfileForm from "./profile.form";

import {
    loaderSelector,
    ordersSelector,
    userInfoSelector,
} from "./profile.slice";
import { getOrders, getUserInfo } from "./profile.thunk";
import ProfileView from "./profile.view";

export default function Profile() {
    const match = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    const loader = useSelector(loaderSelector);
    const orderItems = useSelector(ordersSelector);
    const user = useSelector(userInfoSelector);

    useEffect(() => {
        dispatch(getOrders());
        dispatch(getUserInfo());
    }, [dispatch, location]);

    const updateHandler = async (id = null) => {
        history.push(`${match.url}/update`);
    };

    return (
        <Switch>
            <Route exact path={`${match.url}/update`}>
                <ProfileForm />
            </Route>
            <Route exact path={match.url}>
                <ProfileView
                    loader={loader}
                    orderItems={orderItems}
                    user={user}
                    updateHandler={updateHandler}
                />
            </Route>
            <Redirect exact from="*" to="/404" />
        </Switch>
    );
}
