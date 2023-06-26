"use client";

import { LogInForm } from "@/components/common/forms";
import { Box, Link, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { LoginMutationVariables, useLoginMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useRouter } from "next/navigation";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface LogInProps extends WithTranslation {}

const LogIn: FC<LogInProps> = ({ t }) => {
  const router = useRouter();
  const [loginMutation, { error }] = useLoginMutation();

  const onSubmit = async (values: LoginMutationVariables["input"]) => {
    await loginMutation({
      /* TODO: encrypt password before sending
          Crypto.createHash('sha512')
                .update(values.password)
                .digest('hex'),
       */
      variables: { input: { ...values, password: values.password } },
      onCompleted: ({ login }) => {
        const { accessToken, user } = login;

        loggedInUser(user);
        localStorage.setItem(LOCAL_STORAGE_TOKEN, accessToken);
        router.push(Routes.Home.href);

        toast.success(t("content.success", { user: user.fullName }));
      },
      onError: error => toast.error(t("content.error", { message: error.message })),
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
      <Text variant={"h1"} component={"h2"} textAlign={"center"}>
        {t("content.title")}
      </Text>
      <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>
        {t("content.description")}
      </Text>
      <LogInForm onSubmit={onSubmit} error={error} />
      <Box display={"flex"} gap={1}>
        <Text variant={"small"} opacity={0.7}>
          {t("content.forgotPassword.question")}
        </Text>
        <Link href={"signup"} color={"primary"}>
          <Text variant={"small"} color={"primary"}>
            {t("content.forgotPassword.link")}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.LogIn)(LogIn);
