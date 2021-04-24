import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/about/about";
import Shop from "./components/shop/shop";
import Product from "./components/product/product";

export default function SharedRoutes() {
    return (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/shop">
                <Shop />
            </Route>
            <Route exact path="/shop/:id">
                <Product />
            </Route>
            <Redirect exact from="/" to="/home" />
            <Redirect exact to="/404" from="*" />
        </Switch>
    );
}
