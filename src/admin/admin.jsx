import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Dashboard from "./dashboard/dashboard";

export default function Admin({ match }) {
    return (
        <Switch>
            <Route exact path={match.url + "/"}>
                <Dashboard />
            </Route>
            <Route exact path={match.url + "/users"}>
                <h2> This is admin users</h2>
            </Route>
        </Switch>
    );
}
