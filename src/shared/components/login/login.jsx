import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { loginHandler } from "./login.thunk";
import { errorSelector } from "./login.slice";
import LoginView from "./login.view";

export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);

    const submitHandler = async (values, submitProps) => {
        const { type } = await dispatch(loginHandler(values));
        if (type !== "login/loginHandler/rejected") {
            history.go(0);
        } else {
            submitProps.setSubmitting(false);
        }
    };

    return (
        <LoginView submitHandler={submitHandler} errorMessage={error?.name} />
    );
}
