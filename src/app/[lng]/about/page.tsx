import About from "@/components/common/about/About";
import DotSeparated from "@/components/common/DotSeparated";
import News from "@/components/common/News";
import ContentContainer from "@/components/ui/ContentContainer";
import { LngParamsProps, LngProps } from "@/lib/types/params.type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfitr | About",
};

interface PageProps extends LngParamsProps {}

const AboutPage = async ({ params }: PageProps) => {
  return (<>
    <ContentContainer pageTitle={"About"} disableBottomPadding>
      <About />
      <DotSeparated sentences={["More than  4000 users", "The most fashionable outfits", "Over 10 years on market"]} />
    </ContentContainer>
    {/* @ts-expect-error Server Component */}
    <News lng={params.lng} />
  </>);
};

export default AboutPage;
