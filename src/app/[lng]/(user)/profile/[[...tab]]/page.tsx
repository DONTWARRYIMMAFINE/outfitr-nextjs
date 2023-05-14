import ProfileTabs from "@/components/common/ProfileTabs";
import { ContentContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | Index",
};

type ProfilePageProps = LngParamsProps & {
  params: {
    tab: string
  }
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const { lng, tab } = params;
  const { t } = await useTranslation(lng, "profile");

  return (
    <ContentContainer pageTitle={t("page.title")}>
      <ProfileTabs tab={tab ? tab[0] : ""}/>
    </ContentContainer>
  );
};

export default ProfilePage;
