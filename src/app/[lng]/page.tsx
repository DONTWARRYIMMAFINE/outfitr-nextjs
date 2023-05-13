import { News, Onboarding, Welcome } from "@/components/common";
import { Container, ContentContainer } from "@/components/ui";
import { LngParamsProps } from "@/lib/types/params.type";
import React from "react";

export const metadata = {
  title: "Outfitr | Homepage",
};

interface HomePageProps extends LngParamsProps {}

const HomePage = async ({ params }: HomePageProps) => {
  const { lng } = params;

  return (<>
    <Container>
      {/* @ts-expect-error Server Component */}
      <Welcome lng={lng} />
    </Container>
    <ContentContainer disableBottomPadding>
      {/* @ts-expect-error Server Component */}
      <Onboarding lng={lng} />
    </ContentContainer>
    {/* @ts-expect-error Server Component */}
    <News lng={lng} />
  </>);
};

export default HomePage;
