import LoginForm from "@/components/common/forms/LoginForm";
import { Box, Link, Text } from "@/components/ui";
import ContentContainer from "@/components/ui/ContentContainer";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { Trans } from "react-i18next/TransWithoutContext";

export const metadata: Metadata = {
  title: "Outfitr | Log In",
};

interface LogInPageProps extends LngParamsProps {}

const LogInPage = async ({ params }: LogInPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.LOGIN);

  return (
    <ContentContainer
      maxWidth={"sm"}
      pageTitle={t("page.title")}
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} gap={4}>
        <Text variant={"h1"} component={"h2"} textAlign={"center"}>
          <Trans i18nKey={"content.title"} t={t} />
        </Text>
        <Text variant={"p"} textAlign={"center"} opacity={0.7} paragraph>
          <Trans i18nKey={"content.description"} t={t} />
        </Text>
        <LoginForm />
        <Box display={"flex"} gap={1}>
          <Text variant={"small"} opacity={0.7}>
            <Trans i18nKey={"content.forgotPassword.question"} t={t} />
          </Text>
          <Link href={"signup"} color={"primary"}>
            <Text variant={"small"} color={"primary"}>
              <Trans i18nKey={"content.forgotPassword.link"} t={t} />
            </Text>
          </Link>
        </Box>
      </Box>
    </ContentContainer>
  );
};

export default LogInPage;
