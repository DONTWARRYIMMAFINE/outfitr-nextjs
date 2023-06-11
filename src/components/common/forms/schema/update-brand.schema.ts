import { object, string } from "yup";

export const UpdateBrandSchema = object().shape({
  name: string()
    .min(2, ({ min }) => `Name must be at least ${min} characters`)
    .max(32, ({ max }) => `Name must be less than ${max} characters`)
    .required("Name is required"),
});
