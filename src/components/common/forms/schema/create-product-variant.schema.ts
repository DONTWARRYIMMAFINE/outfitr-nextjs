import { Currencies } from "@/lib/graphql/schema.generated";
import { array, mixed, number, object } from "yup";

export const CreateProductVariantSchema = object().shape({
  amount: number()
    .min(1, ({ min }) => `Price amount must be more than ${min}`)
    .max(100, ({ max }) => `Price amount be less than ${max}`)
    .required("Price amount is required"),
  currency: mixed<Currencies>()
    .oneOf(Object.values(Currencies))
    .required(),
  colorIds: array()
    .min(1, "Choose at least one color"),
  sizeIds: array()
    .min(1, "Choose at least one size"),
});
