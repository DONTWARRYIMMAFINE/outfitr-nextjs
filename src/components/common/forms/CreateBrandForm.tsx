"use client";

import { CreateBrandSchema } from "@/components/common/forms/schema/create-brand.schema";
import { Box, Button, TextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CreateOneBrandInput } from "@/lib/graphql/schema.generated";
import { Formik } from "formik";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface CreateBrandFormProps extends WithTranslation {
  onSubmit: (values: Omit<CreateOneBrandInput["brand"], "userId">) => void;
}

const CreateBrandForm: FC<CreateBrandFormProps> = ({ onSubmit, t }) => {
  return (
    <Formik
      initialValues={{
        code: "",
        name: "",
      }}
      validationSchema={CreateBrandSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isValid, values, handleChange, errors }) => (
        <Box component={"form"} display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <Box display={"flex"} width={"100%"} gap={4}>
            <TextField
              id={"code"}
              name={"code"}
              type={"text"}
              label={t("field.brand.code.label")}
              placeholder={t("field.brand.code.placeholder")!}
              value={values.code}
              onChange={handleChange}
              error={Boolean(errors.code)}
              helperText={errors.code}
              variant={"outlined"}
              required
              fullWidth
            />
            <TextField
              id={"name"}
              name={"name"}
              type={"text"}
              label={t("field.brand.name.label")}
              placeholder={t("field.brand.name.placeholder")!}
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
            {t("createBrand.button.submit.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(CreateBrandForm);
