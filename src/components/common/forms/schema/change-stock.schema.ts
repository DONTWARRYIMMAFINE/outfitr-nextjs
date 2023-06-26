import { number, object, string } from "yup";

const ChangeStockSchema = object().shape({
  warehouseId: string()
    .uuid("Values should be a UUIDv4")
    .required("Warehouse identifier is required"),
  productVariantId: string()
    .uuid("Values should be a UUIDv4")
    .required("Product variant identifier is required"),
  stock: number()
    .integer("Stock must be an integer value")
    .min(1, ({ min }) => `Stock must be more than ${min}`)
    .max(500, ({ max }) => `Stock must be less than ${max}`)
    .required("Stock is required"),
});

export default ChangeStockSchema;
