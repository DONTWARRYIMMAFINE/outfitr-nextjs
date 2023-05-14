"use client";

import { ResetPasswordSchema } from "@/components/common/forms/schema/reset-password.schema";
import SecureIconTextField from "@/components/SecureIconTextField";
import { Box, Button, Icons } from "@/components/ui";
import { Formik } from "formik";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface ResetPasswordFormProps extends WithTranslation {
  onSubmit: <T>(values: T) => void | Promise<void>;
}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ onSubmit, t }) => {
  return (
    <Formik
      initialValues={{
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={ResetPasswordSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isValid, values, handleChange, touched, setFieldTouched, errors }) => (
        <Box display={"flex"} flexDirection={"column"} component={"form"} gap={4}>
          <SecureIconTextField
            id={"password"}
            name={"password"}
            label={t("password.label")}
            placeholder={t("password.placeholder")!}
            value={values.password}
            onChange={handleChange}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <SecureIconTextField
            id={"passwordConfirmation"}
            name={"passwordConfirmation"}
            label={t("passwordConfirmation.label")}
            placeholder={t("passwordConfirmation.placeholder")!}
            value={values.passwordConfirmation}
            onChange={handleChange}
            error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
            helperText={touched.passwordConfirmation && errors.passwordConfirmation}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()}>
            {t("button.reset")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation("form")(ResetPasswordForm);
