import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function ProtectedRoutes({ children, cond, dest, ...rest }) {
    const isLoggedIn = useSelector((state) => state.loginReducer.isLoggedIn);

    return (
        <Route
            {...rest}
            render={({ location }) => {
                if (cond === "no-auth") {
                    return isLoggedIn ? (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: location.pathname },
                            }}
                        />
                    ) : (
                        children
                    );
                }
                if (cond === "auth") {
                    return isLoggedIn ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: dest,
                                state: { from: location.pathname },
                            }}
                        />
                    );
                }
            }}
        />
    );
}
