"use client";

import SecureIconTextField from "@/components/SecureIconTextField";
import { Box, Button, Icons, IconTextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { LoginMutationVariables, useLoginMutation } from "@/lib/graphql/schema.generated";
import { omitEmptyFields } from "@/lib/utils/form.utils";
import { SignInSchema } from "@/lib/validation/signin.schema";
import { loggedInUser } from "@/store/user.store";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { Trans } from "react-i18next/TransWithoutContext";

interface LoginFormProps extends WithTranslation {
  redirectUrl?: string;
}

const LoginForm = ({ t, redirectUrl }: LoginFormProps) => {
  const router = useRouter();
  const [loginMutation, { error }] = useLoginMutation();

  const onSubmit = async (values: LoginMutationVariables["input"]) => {
    await loginMutation({
      variables: { input: omitEmptyFields(values) as LoginMutationVariables["input"] },
      onCompleted: ({ login }) => {
        const { accessToken, user } = login;

        loggedInUser(user);
        localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
        router.push("/");

        toast.success(`Hello back, ${user.fullName}`);
      },
      onError: error => toast.error(error.message),
    });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={values => onSubmit(values)}
    >
      {({ handleSubmit, isValid, values, handleChange, touched, errors }) => (
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} width={"100%"} gap={4}>
          <IconTextField
            id={"email"}
            name={"email"}
            type={"email"}
            label={t("content.form.email.label")}
            placeholder={t("content.form.email.placeholder")!}
            value={values.email}
            onChange={handleChange}
            error={touched.email && (Boolean(errors.email) || !!error)}
            helperText={touched.email && errors.email}
            variant={"outlined"}
            iconStart={<Icons.Email />}
            required
            fullWidth
          />
          <SecureIconTextField
            id={"password"}
            name={"password"}
            label={t("content.form.password.label")}
            placeholder={t("content.form.password.placeholder")!}
            value={values.password}
            onChange={handleChange}
            error={touched.password && (Boolean(errors.password) || !!error)}
            helperText={touched.password && errors.password}
            variant={"outlined"}
            iconStart={<Icons.Key />}
            required
            fullWidth
          />
          <Box display={"flex"} gap={2}>
            <Button disabled={!isValid} variant={"primary"} onClick={() => handleSubmit()}>
              <Trans i18nKey={"content.form.button.login.text"} t={t} />
            </Button>
            <Button href={Routes.SignUp.href} variant={"transparent"}>
              <Trans i18nKey={"content.form.button.signup.text"} t={t} />
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default withTranslation(I18NS.LOGIN)(LoginForm);
