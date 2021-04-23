import React from "react";
import { Route, Switch } from "react-router-dom";

import Shared from "./shared/shared";
import Admin from "./admin/admin";
import Client from "./client/client";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/" component={Shared} />
            <Route exact path="/app" component={Client} />
            <Route exact path="/admin" component={Admin} />
        </Switch>
    );
}
