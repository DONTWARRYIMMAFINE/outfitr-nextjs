import { object, string } from "yup";

export const ContactInfoSchema = object().shape({
  phone: string()
    .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, { message: "Please enter a valid phone number" })
    .required("Phone is required"),
  firstName: string()
    .min(2, ({ min }) => `First Name must be at least ${min} characters`)
    .max(64, ({ max }) => `First Name must be less than ${max} characters`)
    .required("First Name is required"),
  lastName: string()
    .min(2, ({ min }) => `Last Name must be at least ${min} characters`)
    .max(64, ({ max }) => `Last Name must be less than ${max} characters`)
    .required("Last Name is required"),
});
