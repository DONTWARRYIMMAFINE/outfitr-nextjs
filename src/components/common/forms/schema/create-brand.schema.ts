import { object, string } from "yup";

export const CreateBrandSchema = object().shape({
  code: string()
    .min(2, ({ min }) => `Code must be at least ${min} characters`)
    .max(32, ({ max }) => `Code must be less than ${max} characters`)
    .required("Code is required"),
  name: string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .max(32, ({ max }) => `Name must be less than ${max} characters`)
    .required("Name is required"),
});
