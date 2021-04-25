import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { APP, CART, HOME } from "utils/constants";

import Cart from "./components/cart/cart";

export default function ClientRoutes() {
    return (
        <Switch>
            <Route exact path={CART}>
                <Cart />
            </Route>
            <Redirect exact from={APP} to={HOME} />
            <Redirect exact from="*" to="/404" />
        </Switch>
    );
}
