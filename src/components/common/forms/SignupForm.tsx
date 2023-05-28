"use client";

import SecureIconTextField from "@/components/SecureIconTextField";
import { Box, Button, Icons, IconTextField } from "@/components/ui";
import FileUpload from "@/components/ui/FileUpload";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { SignupMutationVariables, useSignupMutation } from "@/lib/graphql/schema.generated";
import { omitEmptyFields } from "@/lib/utils/form.utils";
import { SignUpSchema } from "@/components/common/forms/schema/signup.schema";
import { loggedInUser } from "@/store/user.store";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface SignupFormProps extends WithTranslation {
  redirectUrl?: string;
}

const SignupForm: FC<SignupFormProps> = ({ t, redirectUrl = Routes.Home.href }) => {
  const router = useRouter();
  const [signupMutation, { error }] = useSignupMutation();
  const [file, setFile] = useState<ExtendedFileProps | null>(null);

  const handleFilesChange = (files: ExtendedFileProps[]) => {
    setFile([...files][0]);
  };

  const onSubmit = async (values: SignupMutationVariables["input"]) => {
    await signupMutation({
      variables: { input: omitEmptyFields(values) as SignupMutationVariables["input"], file },
      onCompleted: ({ signup }) => {
        const { accessToken, user } = signup;

        loggedInUser(user);
        localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
        router.push(redirectUrl);

        toast.success(t("content.toast.success", { user: user.fullName }));
      },
      onError: error => toast.error(error.message),
    });
  };

  return (
    <Formik
      initialValues={{
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirmation: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleSubmit, isValid, values, handleChange, errors }) => (
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
            label={t("content.form.email.label")}
            placeholder={t("content.form.email.placeholder")!}
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
            label={t("content.form.phone.label")}
            placeholder={t("content.form.phone.placeholder")!}
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
            label={t("content.form.firstName.label")}
            placeholder={t("content.form.firstName.placeholder")!}
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
            label={t("content.form.lastName.label")}
            placeholder={t("content.form.lastName.placeholder")!}
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
            title={t("content.form.avatar.title")!}
            onFilesChange={handleFilesChange}
          />
          <SecureIconTextField
            id={"password"}
            name={"password"}
            label={t("content.form.password.label")}
            placeholder={t("content.form.password.placeholder")!}
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
            label={t("content.form.passwordConfirmation.label")}
            placeholder={t("content.form.passwordConfirmation.placeholder")!}
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
              {t("content.form.button.signup.text")}
            </Button>
            <Button href={Routes.LogIn.href} variant={"transparent"}>
              {t("content.form.button.login.text")}
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation("signup")(SignupForm);
