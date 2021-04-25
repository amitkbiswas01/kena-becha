import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { HOME } from "utils/constants";

import { loginHandler } from "./login.thunk";
import { errorSelector } from "./login.slice";
import LoginView from "./login.view";

function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);

    const submitHandler = async (values, submitProps) => {
        const { type } = await dispatch(loginHandler(values));

        if (type !== "login/loginHandler/rejected") {
            submitProps.resetForm();
            history.push(HOME);
        }
    };

    return (
        <LoginView submitHandler={submitHandler} errorMessage={error?.name} />
    );
}

export default Login;
