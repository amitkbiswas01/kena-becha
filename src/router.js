import React from "react";
import { Route, Switch } from "react-router-dom";

import Shared from "./shared/shared";
import Admin from "./admin/admin";
import Client from "./client/client";

import NotFound from "./shared/components/404/404";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/404">
                <NotFound />
            </Route>
            <Route path="/app">
                <Client />
            </Route>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/">
                <Shared />
            </Route>
        </Switch>
    );
}
