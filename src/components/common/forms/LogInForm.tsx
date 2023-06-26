"use client";

import { Box, Button, Icons, IconTextField } from "@/components/ui";
import SecureIconTextField from "@/components/ui/SecureIconTextField";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { LoginMutationVariables } from "@/lib/graphql/schema.generated";
import { ApolloError } from "@apollo/client";
import { Formik } from "formik";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { LogInSchema } from "./schema";

interface LogInFormProps extends WithTranslation {
  onSubmit: (values: LoginMutationVariables["input"]) => void;
  error?: ApolloError;
}

const LogInForm: FC<LogInFormProps> = ({ onSubmit, error, t }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LogInSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleSubmit, isValid, values, handleChange, errors }) => (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <IconTextField
            id={"email"}
            name={"email"}
            type={"email"}
            label={t("field.user.email.label")}
            placeholder={t("field.user.email.placeholder")!}
            value={values.email}
            onChange={handleChange}
            error={(Boolean(errors.email) || !!error)}
            helperText={errors.email}
            variant={"outlined"}
            iconStart={<Icons.Email />}
            required
            fullWidth
          />
          <SecureIconTextField
            id={"password"}
            name={"password"}
            label={t("field.user.password.label")}
            placeholder={t("field.user.password.placeholder")!}
            value={values.password}
            onChange={handleChange}
            error={(Boolean(errors.password) || !!error)}
            helperText={errors.password}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <Box display={"flex"} gap={2}>
            <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()}>
              {t("login.button.submit.label")}
            </Button>
            <Button href={Routes.SignUp.href} variant={"transparent"}>
              {t("login.button.signup.label")}
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(LogInForm);
