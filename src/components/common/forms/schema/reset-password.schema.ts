import { object, ref, string } from "yup";

const ResetPasswordSchema = object().shape({
  password: string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .max(64, ({ max }) => `Password must be less than ${max} characters`)
    .required("password.errors.required"),
  passwordConfirmation: string()
    .oneOf([ref("password")], "passwordConfirmation.errors.oneOf")
    .required("passwordConfirmation.errors.required"),
});

export default ResetPasswordSchema;
