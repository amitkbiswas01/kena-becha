import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
    ADMIN_HOME,
    ADMIN_USERS,
    ADMIN_CATEGORIES,
    ADMIN_PRODUCTS,
    ADMIN_ORDERS,
} from "utils/constants";

import Users from "./components/users/users";
import Products from "./components/products/products";
import Categories from "./components/categories/categories";
import Orders from "./components/orders/orders";

export default function AdminRoutes() {
    return (
        <Switch>
            <Route path={ADMIN_USERS}>
                <Users />
            </Route>
            <Route path={ADMIN_PRODUCTS}>
                <Products />
            </Route>
            <Route path={ADMIN_CATEGORIES}>
                <Categories />
            </Route>
            <Route path={ADMIN_ORDERS}>
                <Orders />
            </Route>
            <Redirect exact from={ADMIN_HOME} to={ADMIN_USERS} />
            <Redirect exact from="*" to="/404" />
        </Switch>
    );
}
