"use client";

import { Box, Button, FileUpload, Icons, IconTextField, SecureIconTextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { SignupMutationVariables } from "@/lib/graphql/schema.generated";
import { ApolloError } from "@apollo/client";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Formik } from "formik";
import React, { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";
import { SignUpSchema } from "./schema";

interface SignUpFormProps extends WithTranslation {
  onSubmit: (values: SignupMutationVariables["input"], asPartner: boolean) => void;
  onFilesChange: (files: ExtendedFileProps[]) => void;
  error?: ApolloError;
}

const SignUpForm: FC<SignUpFormProps> = ({ onSubmit, onFilesChange, error, t }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
        asPartner: false,
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => {
        const { asPartner, ...input } = values;
        onSubmit(input, asPartner);
      }}
    >
      {({ handleSubmit, isValid, values, setValues, handleChange, errors }) => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"100%"}
          gap={4}
          component={"form"}
        >
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
          <IconTextField
            id={"phone"}
            name={"phone"}
            type={"tel"}
            label={t("field.user.phone.label")}
            placeholder={t("field.user.phone.placeholder")!}
            value={values.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            variant={"outlined"}
            iconStart={<Icons.Phone />}
            fullWidth
          />
          <IconTextField
            id={"firstName"}
            name={"firstName"}
            label={t("field.user.firstName.label")}
            placeholder={t("field.user.firstName.placeholder")!}
            value={values.firstName}
            onChange={handleChange}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
            variant={"outlined"}
            iconStart={<Icons.Credentials />}
            required
            fullWidth
          />
          <IconTextField
            id={"lastName"}
            name={"lastName"}
            label={t("field.user.lastName.label")}
            placeholder={t("field.user.lastName.placeholder")!}
            value={values.lastName}
            onChange={handleChange}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
            variant={"outlined"}
            iconStart={<Icons.Credentials />}
            required
            fullWidth
          />
          <FileUpload
            multiFile={false}
            maxUploadFiles={1}
            title={t("field.user.avatar.title")!}
            onFilesChange={onFilesChange}
          />
          <Box width={"100%"}>
            <FormControlLabel
              label={t("field.user.asPartner.label")}
              control={
                <Checkbox
                  checked={values.asPartner}
                  onChange={e => setValues({ ...values, asPartner: e.target.checked })}
                />
              }
            />
          </Box>
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
          <SecureIconTextField
            id={"passwordConfirmation"}
            name={"passwordConfirmation"}
            label={t("field.user.passwordConfirmation.label")}
            placeholder={t("field.user.passwordConfirmation.placeholder")!}
            value={values.passwordConfirmation}
            onChange={handleChange}
            error={(Boolean(errors.passwordConfirmation) || !!error)}
            helperText={errors.passwordConfirmation}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <Box display={"flex"} gap={2}>
            <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()}>
              {t("signup.button.submit.label")}
            </Button>
            <Button href={Routes.LogIn.href} variant={"transparent"}>
              {t("signup.button.login.label")}
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.Form)(SignUpForm);
