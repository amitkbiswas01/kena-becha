import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { logout } from "../login/login.slice";
import { LOGIN } from "utils/constants";

export default function Logout() {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
        history.push(LOGIN);
    }, [dispatch, history]);

    return <></>;
}
