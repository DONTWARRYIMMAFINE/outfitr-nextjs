import SignUp from "@/components/common/SignUp";
import ContentContainer from "@/components/ui/ContentContainer";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Sign Up",
};

interface SignUpPageProps extends LngParamsProps {}

const SignUpPage = async ({ params }: SignUpPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.SignUp);

  return (
    <ContentContainer maxWidth={"sm"} pageTitle={t("page.title")}>
      <SignUp />
    </ContentContainer>
  );
};

export default SignUpPage;
