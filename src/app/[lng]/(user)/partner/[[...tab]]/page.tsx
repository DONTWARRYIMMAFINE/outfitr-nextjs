import PartnerTabs from "@/components/common/PartnerTabs";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Partner",
};

interface PartnerPageProps extends LngParamsProps {}

const ProfilePage = async ({ params }: PartnerPageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.Partner);

  return (
    <PageContainer pageTitle={t("page.title")}>
      <PartnerTabs />
    </PageContainer>
  );
};

export default ProfilePage;
