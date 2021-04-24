import React from "react";
import { Route, Redirect, Switch, useRouteMatch } from "react-router-dom";

import Users from "./users/users";
import Dashboard from "./dashboard/dashboard";

export default function Admin() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/dashboard`}>
                <Dashboard />
            </Route>
            <Route exact path={`${path}/users`}>
                <Users />
            </Route>
            <Redirect exact to={`${path}/dashboard`} from={path} />
            <Redirect exact to="/404" from="*" />
        </Switch>
    );
}
