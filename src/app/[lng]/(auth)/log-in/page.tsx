import LogIn from "@/components/common/LogIn";
import ContentContainer from "@/components/ui/ContentContainer";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Log In",
};

interface LogInPageProps extends LngParamsProps {}

const LogInPage = async ({ params }: LogInPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.LogIn);

  return (
    <ContentContainer
      maxWidth={"sm"}
      pageTitle={t("page.title")}
    >
      <LogIn />
    </ContentContainer>
  );
};

export default LogInPage;
