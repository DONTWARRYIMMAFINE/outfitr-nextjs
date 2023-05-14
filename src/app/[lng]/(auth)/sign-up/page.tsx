import SignupForm from "@/components/common/forms/SignupForm";
import { Box, Link, Text } from "@/components/ui";
import ContentContainer from "@/components/ui/ContentContainer";
import { Routes } from "@/constants/routes";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { Trans } from "react-i18next/TransWithoutContext";

export const metadata: Metadata = {
  title: "Outfitr | Sign Up",
};

interface SignUpPageProps extends LngParamsProps {}

const SignUpPage = async ({ params }: SignUpPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, "signup");

  return (
    <ContentContainer maxWidth={"sm"} pageTitle={t("page.title")}>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Text variant={"h1"} component={"h2"} textAlign={"center"}>
          {t("content.title")}
        </Text>
        <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>
          {t("content.description")}
        </Text>
        <SignupForm />
      </Box>
    </ContentContainer>
  );
};

export default SignUpPage;
