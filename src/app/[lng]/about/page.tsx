import { About, DotSeparated, News } from "@/components/common";
import { PageContainer } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | About",
};

interface PageProps extends LngParamsProps {}

const AboutPage = async ({ params }: PageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.About);

  return (<>
    <PageContainer
      pageTitle={t("page.title")}
      disableBottomPadding
    >
      <About />
      <DotSeparated
        messages={[
          t("dotSeparated.0"),
          t("dotSeparated.1"),
          t("dotSeparated.2"),
        ]}
      />
    </PageContainer>
    {/* @ts-expect-error Server Component */}
    <News lng={lng} />
  </>);
};

export default AboutPage;
