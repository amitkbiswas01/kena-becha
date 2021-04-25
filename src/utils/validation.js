import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid Email address!")
        .required("Email is required!"),
    password: Yup.string()
        .required("Can't login without a Password!")
        .min(8)
        .max(20),
});
