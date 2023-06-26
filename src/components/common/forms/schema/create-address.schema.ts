import { object, string } from "yup";

const CreateAddressSchema = object().shape({
  countryId: string()
    .uuid("Values should be a UUIDv4")
    .required("Country identifier is required"),
  cityId: string()
    .uuid("Values should be a UUIDv4")
    .required("City identifier is required"),
  postalCode: string()
    .matches(/\d{6}$/, { message: "Enter a valid postal code" })
    .required("Postal code is required"),
  state: string()
    .min(2, ({ min }) => `State must be at least ${min} characters`)
    .max(64, ({ max }) => `State must be less than ${max} characters`),
  street: string()
    .min(2, ({ min }) => `Street must be at least ${min} characters`)
    .max(64, ({ max }) => `Street must be less than ${max} characters`),
  building: string()
    .min(1, ({ min }) => `Building must be at least ${min} characters`)
    .max(12, ({ max }) => `Building must be less than ${max} characters`),
});

export default CreateAddressSchema;
