"use client";

import { Box, Button, TextField } from "@/components/ui";
import { BrandFragment, UpdateOneBrandInput } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { omit } from "lodash";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface UpdateBrandFormProps extends WithTranslation {
  brand: BrandFragment;
  onSubmit: (values: UpdateOneBrandInput["update"]) => void;
}

const UpdateBrandForm: FC<UpdateBrandFormProps> = ({ brand, onSubmit, t }) => {
  return (
    <Formik
      initialValues={{
        code: brand.code,
        name: brand.name,
      }}
      validationSchema={UpdateBrandForm}
      onSubmit={values => onSubmit(omit(values, "code"))}
    >
      {({ handleSubmit, isValid, values, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <Box display={"flex"} width={"100%"} gap={4}>
            <TextField
              id={"code"}
              name={"code"}
              type={"text"}
              label={t("component.form.brand.code.label")}
              placeholder={t("component.form.brand.code.placeholder")!}
              value={values.code}
              error={Boolean(errors.code)}
              helperText={errors.code}
              variant={"outlined"}
              disabled
              required
              fullWidth
            />
            <TextField
              id={"name"}
              name={"name"}
              type={"text"}
              label={t("component.form.brand.name.label")}
              placeholder={t("component.form.brand.name.placeholder")!}
              value={values.name}
              onChange={handleChange}
              error={Boolean(errors.name)}
              helperText={errors.name}
              variant={"outlined"}
              required
              fullWidth
            />
          </Box>
          <Button variant={"primary"} disabled={!isValid} onClick={() => handleSubmit()} fullWidth>
            {t("component.button.save")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation()(UpdateBrandForm);
