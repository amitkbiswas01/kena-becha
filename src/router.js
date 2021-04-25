import React from "react";
import { Route, Switch } from "react-router-dom";

import Shared from "./shared/shared";
import Admin from "./admin/admin";
import Client from "./client/client";

import { LOGIN } from "utils/constants";
import ProtectedRoutes from "utils/protected.routes";

import NotFound from "./shared/components/404/404";

export default function Router() {
    return (
        <Switch>
            <Route exact path="/404">
                <NotFound />
            </Route>
            <ProtectedRoutes path="/app" cond="auth" dest={LOGIN}>
                <Client />
            </ProtectedRoutes>
            <Route path="/admin">
                <Admin />
            </Route>
            <Route path="/">
                <Shared />
            </Route>
        </Switch>
    );
}
