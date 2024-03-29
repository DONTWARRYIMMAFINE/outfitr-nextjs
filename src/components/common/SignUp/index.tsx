"use client";

import { SignUpForm } from "@/components/common/forms";
import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { SignupMutationVariables, UserFragment, useSignupAsPartnerMutation, useSignupMutation } from "@/lib/graphql/schema.generated";
import { omitEmptyFields } from "@/lib/utils/form.utils";
import { loggedInUser } from "@/store/user.store";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { ExtendedFileProps } from "react-mui-fileuploader/dist/types/index.types";

interface SignUpProps extends WithTranslation {}

const SignUp: FC<SignUpProps> = ({ t }) => {
  const router = useRouter();
  const [signupMutation, { error: signupError }] = useSignupMutation();
  const [signupAsPartnerMutation, { error: signupAsPartnerError }] = useSignupAsPartnerMutation();
  const [file, setFile] = useState<ExtendedFileProps | null>(null);

  const onFilesChange = (files: ExtendedFileProps[]) => {
    setFile([...files][0]);
  };

  const onComplete = (accessToken: string, user: UserFragment) => {
    loggedInUser(user);
    localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
    router.push(Routes.Home.href);

    toast.success(t("content.success", { user: user.fullName }));
  };

  const onSubmit = async (values: SignupMutationVariables["input"], asPartner: boolean) => {
    if (asPartner) {
      await signupAsPartnerMutation({
        /* TODO: encrypt password and passwordConfirmation before sending
            Crypto.createHash('sha512')
                  .update(values.password)
                  .digest('hex'),
         */
        variables: {
          input: {
            ...omitEmptyFields(values) as SignupMutationVariables["input"],
            password: values.password,
            passwordConfirmation: values.passwordConfirmation,
          },
          file,
        },
        onCompleted: ({ signupAsPartner }) => onComplete(signupAsPartner.accessToken, signupAsPartner.user),
        onError: error => toast.error(t("content.error", { message: error.message })),
      });
    } else {
      await signupMutation({
        /* TODO: encrypt password and passwordConfirmation before sending
            Crypto.createHash('sha512')
                  .update(values.password)
                  .digest('hex'),
         */
        variables: {
          input: {
            ...omitEmptyFields(values) as SignupMutationVariables["input"],
            password: values.password,
            passwordConfirmation: values.passwordConfirmation,
          },
          file,
        },
        onCompleted: ({ signup }) => onComplete(signup.accessToken, signup.user),
        onError: error => toast.error(t("content.error", { message: error.message })),
      });
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
      <Text variant={"h1"} component={"h2"} textAlign={"center"}>
        {t("content.title")}
      </Text>
      <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>
        {t("content.description")}
      </Text>
      <SignUpForm onSubmit={onSubmit} onFilesChange={onFilesChange} error={signupError || signupAsPartnerError} />
    </Box>
  );
};

export default withTranslation(I18NS.SignUp)(SignUp);
