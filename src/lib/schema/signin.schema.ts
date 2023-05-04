import { object, string } from "yup";

export const SignInSchema = object().shape({
  email: string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
