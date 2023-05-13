import { News } from "@/components/common";
import About from "@/components/common/about/About";
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
      pageTitle={<Trans i18nKey={"title"} t={t} />}
      disableBottomPadding
    >
      <About />
      <DotSeparated
        sentences={[
          <Trans i18nKey={"dotSeparated.0"} t={t} />,
          <Trans i18nKey={"dotSeparated.1"} t={t} />,
          <Trans i18nKey={"dotSeparated.2"} t={t} />
        ]}
      />
    </ContentContainer>
    {/* @ts-expect-error Server Component */}
    <News lng={params.lng} />
  </>);
};

export default AboutPage;
