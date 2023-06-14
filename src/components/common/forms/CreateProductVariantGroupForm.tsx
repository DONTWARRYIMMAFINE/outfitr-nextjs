"use client";

import ColorsFilter from "@/components/common/Catalog/FilterPanel/ColorsFilter";
import SizesFilter from "@/components/common/Catalog/FilterPanel/SizesFilter";
import { CreateProductVariantSchema } from "@/components/common/forms/schema/create-product-variant.schema";
import Select from "@/components/common/Select";
import { Box, Button, TextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CreateProductVariantInput, Currencies } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

function populateProductVariants(amount: number, currency: Currencies, colorIds: string[], sizeIds: string[]): Partial<CreateProductVariantInput>[] {
  const productVariants: Partial<CreateProductVariantInput>[] = [];
  for (const colorId of colorIds) {
    for (const sizeId of sizeIds) {
      const productVariant: Partial<CreateProductVariantInput> = {
        price: {
          amount,
        },
        colorId: colorId,
        sizeId: sizeId,
      };
      productVariants.push(productVariant);
    }
  }
  return productVariants;
}

interface CreateProductVariantGroupFormProps extends WithTranslation {
  onSubmit: (productVariants: Partial<CreateProductVariantInput>[]) => void;
}

const CreateProductVariantGroupForm: FC<CreateProductVariantGroupFormProps> = ({ onSubmit, t }) => {
  return (
    <Formik
      initialValues={{
        amount: 0,
        currency: Currencies.Byn,
        colorIds: [] as string[],
        sizeIds: [] as string[],
      }}
      validationSchema={CreateProductVariantSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(populateProductVariants(values.amount, values.currency, values.colorIds, values.sizeIds));
        resetForm();
      }}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={2}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"} gap={2}>
            <TextField
              id={"amount"}
              name={"amount"}
              type={"number"}
              label={t("field.product.variant.price.amount.label")}
              placeholder={t("field.product.variant.price.amount.placeholder")!}
              value={values.amount}
              onChange={handleChange}
              error={Boolean(errors.amount)}
              helperText={errors.amount}
              variant={"outlined"}
              required
              fullWidth
            />
            <Select
              variant={"outlined"}
              value={values.currency}
              options={Object.values(Currencies).map((value) => {
                return {
                  label: value,
                  value,
                };
              })}
              onChange={value => setValues({ ...values, currency: value as Currencies })}
              fullWidth
            />
          </Box>
          <ColorsFilter
            field={"id"}
            selectedValues={values.colorIds}
            handleFilterChange={value => {
              const exists = values.colorIds.indexOf(value) > -1;
              setValues({
                ...values,
                colorIds: exists
                  ? values.colorIds?.filter(s => s !== value)
                  : [...values.colorIds, value],
              });
            }}
          />
          <SizesFilter
            field={"id"}
            selectedValues={values.sizeIds}
            handleFilterChange={value => {
              const exists = values.sizeIds.indexOf(value) > -1;
              setValues({
                ...values,
                sizeIds: exists
                  ? values.sizeIds?.filter(s => s !== value)
                  : [...values.sizeIds, value],
              });
            }}
          />
          <Button variant={"primary"} disabled={!isValid} onClick={() => handleSubmit()} fullWidth>
            {t("createProductVariant.button.submit.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(CreateProductVariantGroupForm);
