import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { APP, CART, HOME, PROFILE } from "utils/constants";

import Cart from "./components/cart/cart";
import Profile from "./components/profile/profile";

export default function ClientRoutes() {
    return (
        <Switch>
            <Route exact path={CART}>
                <Cart />
            </Route>
            <Route path={PROFILE}>
                <Profile />
            </Route>
            <Redirect exact from={APP} to={HOME} />
            <Redirect exact from="*" to="/404" />
        </Switch>
    );
}
