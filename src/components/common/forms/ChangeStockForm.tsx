"use client";

import { WarehouseSelect } from "@/components/common";
import { Box, Button, Icons, IconTextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductVariantFragment, SetWarehouseItemsInWarehouseMutationVariables, useWarehouseItemLazyQuery } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import { ChangeStockSchema } from "./schema";

interface ChangeStockFormProps extends WithTranslation {
  productVariant: ProductVariantFragment;
  onSubmit: (values: SetWarehouseItemsInWarehouseMutationVariables["input"]) => void;
}

const ChangeStockForm: FC<ChangeStockFormProps> = ({ productVariant, onSubmit, t }) => {
  const [warehouseItemLazyQuery] = useWarehouseItemLazyQuery({});

  return (
    <Formik
      initialValues={{
        warehouseId: "",
        productVariantId: productVariant.id,
        stock: 0,
        reserved: 0,
        available: 0,
      }}
      validationSchema={ChangeStockSchema}
      onSubmit={values => onSubmit({
        id: values.warehouseId,
        update: {
          warehouseItems: [
            {
              productVariantId: values.productVariantId,
              quantity: values.stock,
            },
          ],
        },
      })}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <Box display={"flex"} gap={4} width={"100%"}>
            <WarehouseSelect
              id={"warehouseId"}
              name={"warehouseId"}
              value={values.warehouseId}
              onChange={async value => {
                await warehouseItemLazyQuery({
                  onCompleted: ({ warehouseItem }) => setValues({
                    ...values,
                    warehouseId: value,
                    stock: warehouseItem.stock,
                    reserved: warehouseItem.reserved,
                    available: warehouseItem.available,
                  }),
                  onError: _ => setValues({
                    ...values,
                    warehouseId: value,
                    stock: 0,
                    reserved: 0,
                    available: 0,
                  }),
                  variables: {
                    input: {
                      warehouseId: value,
                      productVariantId: values.productVariantId,
                    },
                  },
                });
              }}
              error={Boolean(errors.warehouseId)}
              fullWidth
            />
            <IconTextField
              id={"stock"}
              name={"stock"}
              type={"number"}
              label={t("field.warehouseItem.stock.label")}
              placeholder={t("field.warehouseItem.stock.placeholder")!}
              value={values.stock}
              onChange={handleChange}
              error={Boolean(errors.stock)}
              helperText={errors.stock}
              variant={"outlined"}
              iconStart={<Icons.Stock />}
              disabled={!Boolean(values.warehouseId)}
              required
              fullWidth
            />
            <Box display={"flex"} gap={4} width={"100%"}>
              <IconTextField
                id={"reserved"}
                name={"reserved"}
                type={"number"}
                label={t("field.warehouseItem.reserved.label")}
                placeholder={t("field.warehouseItem.reserved.placeholder")!}
                value={values.reserved}
                variant={"outlined"}
                iconStart={<Icons.Stock />}
                disabled
                fullWidth
              />
              <IconTextField
                id={"available"}
                name={"available"}
                type={"number"}
                label={t("field.warehouseItem.available.label")}
                placeholder={t("field.warehouseItem.available.placeholder")!}
                value={values.available}
                variant={"outlined"}
                iconStart={<Icons.Stock />}
                disabled
                fullWidth
              />
            </Box>
          </Box>
          <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()} fullWidth>
            {t("changeStock.button.submit.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(ChangeStockForm);
