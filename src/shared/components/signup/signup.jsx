import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { LOGIN } from "utils/constants";

import { signupHandler } from "./signup.thunk";
import { errorSelector } from "./signup.slice";
import SignupView from "./signup.view";

export default function Signup() {
    const history = useHistory();
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);

    const submitHandler = async (values, submitProps) => {
        const { type } = await dispatch(signupHandler(values));

        if (type !== "signup/signupHandler/rejected") {
            submitProps.resetForm();
            history.push(LOGIN);
        }
    };

    return (
        <SignupView submitHandler={submitHandler} errorMessage={error?.name} />
    );
}
