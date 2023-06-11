import { number, object, string } from "yup";

export const CreateCommentSchema = object().shape({
  title: string()
    .min(2, ({ min }) => `Title must be at least ${min} characters`)
    .max(256, ({ max }) => `Title must be less than ${max} characters`)
    .required("Title is required"),
  description: string()
    .max(8092, ({ max }) => `Description must be less than ${max} characters`),
  rating: number()
    .integer("Rating must be an integer value")
    .min(1, ({ min }) => `Rating must be more than ${min}`)
    .max(5, ({ max }) => `Rating must be less than ${max}`)
    .required("Password is required"),
});
