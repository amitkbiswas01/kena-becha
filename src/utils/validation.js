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

export const signupInitials = {
    email: "",
    password: "",
    repassword: "",
    username: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    lat: "",
    long: "",
    phone: "",
};

export const signupValidation = Yup.object({
    email: Yup.string()
        .email("Invalid Email address!")
        .required("Email is required!"),
    password: Yup.string()
        .min(8)
        .max(20)
        .required("Can't signup without a Password!"),
    repassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match!")
        .required("Enter first password again!"),
    username: Yup.string("Username can't be just numbers!").required(
        "Username is required!",
    ),
    firstname: Yup.string("Name can't be just numbers!").required(
        "First name is required!",
    ),
    lastname: Yup.string("Name can't be just numbers!").required(
        "Last name is required!",
    ),
    city: Yup.string("City can't be just numbers!").required(
        "City name is required!",
    ),
    street: Yup.string("Street Can't be just numbers!").required(
        "Street name is required!",
    ),
    number: Yup.string().required("House No. is required!"),
    zipcode: Yup.string().required("Zipcode is required!"),
    lat: Yup.number("Latitude has to be a number!").required(
        "Latitude is required!",
    ),
    long: Yup.number("Longitude has to be a number!").required(
        "Longitude is required!",
    ),
    phone: Yup.string().required("Phone Number is required!"),
});
