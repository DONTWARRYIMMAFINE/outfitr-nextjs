"use client";

import { Box, Button, Icons } from "@/components/ui";
import SecureIconTextField from "@/components/ui/SecureIconTextField";
import { I18NS } from "@/constants/I18NS";
import { Formik } from "formik";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { ResetPasswordSchema } from "./schema";

export interface ResetPasswordFormProps extends WithTranslation {
  onSubmit: (values: any) => void | Promise<void>;
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
      {({ handleSubmit, isValid, values, handleChange, touched, errors }) => (
        <Box display={"flex"} flexDirection={"column"} component={"form"} gap={4}>
          <SecureIconTextField
            id={"password"}
            name={"password"}
            label={t("field.user.password.label")}
            placeholder={t("field.user.password.placeholder")!}
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
            label={t("field.user.passwordConfirmation.label")}
            placeholder={t("field.user.passwordConfirmation.placeholder")!}
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
            {t("resetPassword.button.reset.label")}
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(ResetPasswordForm);
