import { Onboarding, Welcome } from "@/components/common";
import { Container, ContentContainer } from "@/components/ui";
import { useTranslation } from "@/lib/i18n";
import { LngParamsProps } from "@/lib/types/params.type";
import React from "react";

export const metadata = {
  title: "Outfitr | Homepage",
};

interface HomePageProps extends LngParamsProps {}

const HomePage = async ({ params }: HomePageProps) => {
  const { t } = await useTranslation(params.lng, "home");

  return (<>
    <Container>
      <Welcome t={t} />
    </Container>
    <ContentContainer disableBottomPadding>
      <Onboarding t={t}/>
    </ContentContainer>
  </>);
};

export default HomePage;
