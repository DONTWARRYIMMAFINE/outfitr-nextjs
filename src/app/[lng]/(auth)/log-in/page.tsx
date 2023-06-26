import { LogIn } from "@/components/common";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In | Outfitr",
};

interface LogInPageProps extends LngParamsProps {}

const LogInPage = async ({ params }: LogInPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.LogIn);

  return (
    <PageContainer
      maxWidth={"sm"}
      pageTitle={t("page.title")}
    >
      <LogIn />
    </PageContainer>
  );
};

export default LogInPage;
