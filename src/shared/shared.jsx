import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/about/about";

export default function Shared() {
    return (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Redirect exact from="/" to="/home" />
            <Redirect exact to="/404" from="*" />
        </Switch>
    );
}
