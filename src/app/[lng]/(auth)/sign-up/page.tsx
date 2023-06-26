import { SignUp } from "@/components/common";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Outfitr",
};

interface SignUpPageProps extends LngParamsProps {}

const SignUpPage = async ({ params }: SignUpPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.SignUp);

  return (
    <PageContainer maxWidth={"sm"} pageTitle={t("page.title")}>
      <SignUp />
    </PageContainer>
  );
};

export default SignUpPage;
