import ProfileTabs from "@/components/common/ProfileTabs";
import { ContentContainer } from "@/components/ui";
import { tabs } from "@/constants/routes";
import { useTranslation } from "@/lib/i18n";
import { languages } from "@/lib/i18n/settings";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Index",
};

interface ProfilePageProps extends LngParamsProps {}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, "profile");

  return (
    <ContentContainer pageTitle={t("page.title")}>
      <ProfileTabs/>
    </ContentContainer>
  );
};

export default ProfilePage;