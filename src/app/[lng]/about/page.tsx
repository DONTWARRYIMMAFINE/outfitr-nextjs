import { About, News } from "@/components/common";
import DotSeparated from "@/components/common/DotSeparated";
import ContentContainer from "@/components/ui/ContentContainer";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { Trans } from "react-i18next/TransWithoutContext";

export const metadata: Metadata = {
  title: "Outfitr | About",
};

interface PageProps extends LngParamsProps {}

const AboutPage = async ({ params }: PageProps) => {
  const { lng } = params;
  const { t } = await useTranslation(lng, I18NS.ABOUT);

  return (<>
    <ContentContainer
      pageTitle={t("page.title")}
      disableBottomPadding
    >
      <About />
      <DotSeparated
        sentences={[
          t("dotSeparated.0"),
          t("dotSeparated.1"),
          t("dotSeparated.2"),
        ]}
      />
    </ContentContainer>
    {/* @ts-expect-error Server Component */}
    <News lng={lng} />
  </>);
};

export default AboutPage;
