import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("*Required"),
    password: Yup.string()
        .min(6, "password at least 6")
        .required("Required"),
    confirm_password: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Password Must Match"),
    email: Yup.string().email("Invalid email").required("Required"),
});