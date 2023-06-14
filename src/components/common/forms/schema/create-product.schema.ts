import { object, string } from "yup";

export const CreateProductSchema = object().shape({
  brandId: string()
    .uuid("Value should be in UUIDv4 format")
    .required("Brand identifier is required"),
  categoryId: string()
    .uuid("Value should be in UUIDv4 format")
    .required("Category identifier is required"),
  title: string()
    .min(2, ({ min }) => `Title must be at least ${min} characters`)
    .max(256, ({ max }) => `Title must be less than ${max} characters`)
    .required("Title is required"),
  description: string()
    .max(8092, ({ max }) => `Description must be less than ${max} characters`),
});
