import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { CustomerRoutes } from "utils/protected.routes";
import { HOME, LOGIN, ABOUT, SHOP, LOGOUT, SIGNUP } from "utils/constants";

import Home from "./components/home/home";
import About from "./components/about/about";
import Shop from "./components/shop/shop";
import Product from "./components/product/product";
import Login from "./components/login/login";
import Logout from "./components/logout/logout";
import Signup from "./components/signup/signup";

export default function SharedRoutes({ isLoggedIn }) {
    return (
        <Switch>
            <Route exact path={HOME}>
                <Home isLoggedIn={isLoggedIn} />
            </Route>
            <Route exact path={ABOUT}>
                <About />
            </Route>
            <Route exact path={SHOP}>
                <Shop />
            </Route>
            <Route exact path={`${SHOP}/:id`}>
                <Product />
            </Route>
            <CustomerRoutes exact path={LOGIN} cond="no-auth" dest={HOME}>
                <Login />
            </CustomerRoutes>
            <CustomerRoutes exact path={LOGOUT} cond="auth" dest={LOGIN}>
                <Logout />
            </CustomerRoutes>
            <CustomerRoutes exact path={SIGNUP} cond="no-auth" dest={HOME}>
                <Signup />
            </CustomerRoutes>
            <Redirect exact from="/" to={HOME} />
            <Redirect exact to="/404" from="*" />
        </Switch>
    );
}
