import { NewsSubscribe, Onboarding, Welcome } from "@/components/common";
import { Container, ContentContainer } from "@/components/ui";
import React, { FC } from "react";

export const metadata = {
  title: "Outfitr | Homepage",
};

const HomePage: FC = () => {
  return (<>
    <Container>
      <Welcome />
    </Container>
    <ContentContainer disableBottomPadding>
      <Onboarding />
    </ContentContainer>
    <NewsSubscribe />
  </>);
};

export default HomePage;
