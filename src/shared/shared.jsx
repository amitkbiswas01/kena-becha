import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Home from "./components/home/home";

export default function Shared() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Redirect to="/" />
            </Route>
        </Switch>
    );
}
