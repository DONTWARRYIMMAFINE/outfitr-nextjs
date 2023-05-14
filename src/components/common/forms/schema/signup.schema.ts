import { object, ref, string } from "yup";

export const SignUpSchema = object().shape({
  email: string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: string()
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, { message: "Please enter a valid phone number" }),
  firstName: string()
    .min(2, ({ min }) => `First Name must be at least ${min} characters`)
    .max(64, ({ max }) => `First Name must be less than ${max} characters`)
    .required("First Name is required"),
  lastName: string()
    .min(2, ({ min }) => `Last Name must be at least ${min} characters`)
    .max(64, ({ max }) => `Last Name must be less than ${max} characters`)
    .required("Last Name is required"),
  password: string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(64, ({ max }) => `Password must be less than ${max} characters`)
    .required("Password is required"),
  passwordConfirmation: string()
    .oneOf([ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
});
