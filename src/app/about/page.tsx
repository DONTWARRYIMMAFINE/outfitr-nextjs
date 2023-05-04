import About from "@/components/common/about/About";
import DotSeparated from "@/components/common/DotSeparated";
import NewsSubscribe from "@/components/common/news-subscribe/NewsSubscribe";
import ContentContainer from "@/components/ui/ContentContainer";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | About",
};

interface PageProps {}

const AboutPage: FC<PageProps> = ({}) => {
  return (<>
    <ContentContainer pageTitle={"About"} disableBottomPadding>
      <About />
      <DotSeparated sentences={["More than  4000 users", "The most fashionable outfits", "Over 10 years on market"]}/>
    </ContentContainer>
    <NewsSubscribe />
  </>);
};

export default AboutPage;
