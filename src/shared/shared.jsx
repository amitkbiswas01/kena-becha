import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import { LOGIN, SIGNUP } from "shared/constants";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Shop from "./components/shop/shop";

export const profileItems = [
    { name: "Login", href: LOGIN },
    { name: "Sign up", href: SIGNUP },
];

export default function Shared() {
    return (
        <>
            <Navbar profileItems={profileItems} />
            <main>
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
                    <Redirect exact from="/" to="/home" />
                    <Redirect exact to="/404" from="*" />
                </Switch>
            </main>
        </>
    );
}
