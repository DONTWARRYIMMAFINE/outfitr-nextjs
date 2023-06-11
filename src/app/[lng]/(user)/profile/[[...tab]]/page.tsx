import ProfileTabs from "@/components/common/ProfileTabs";
import { PageContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Profile",
};

interface ProfilePageProps extends LngParamsProps {}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, "profile");

  return (
    <PageContainer pageTitle={t("page.title")}>
      <ProfileTabs />
    </PageContainer>
  );
};

export default ProfilePage;
