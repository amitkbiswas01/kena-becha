import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logout } from "../login/login.slice";
import { HOME } from "utils/constants";

export default function Logout() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        history.push(HOME);
    }, [dispatch, history]);

    return <></>;
}
