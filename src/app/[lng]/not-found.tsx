import { Grid2x1 } from "@/components/common";
import { Box, Button, Text } from "@/components/ui";
import ContentContainer from "@/components/ui/ContentContainer";
import { Metadata } from "next";
import Image from "next/image";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Not Found",
};

interface Block1Props {
  image: string;
}

const Block1: FC<Block1Props> = ({ image }) => {
  return (
    <Box
      position={"relative"}
      width={"100%"}
      minHeight={"100%"}
      height={300}
    >
      <Image
        src={image}
        alt={""}
        style={{ objectFit: "contain" }}
        fill
      />
    </Box>
  );
};

const Block2: FC = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Text variant={"h1"} component={"h2"}>The page you've requested for is not available.</Text>
      <Text variant={"h4"} opacity={0.7} paragraph>Sorry, we are having a problem executing your request. You may be visiting us from an old bookmark or using a broken link,
        Please click on the link below for more information.</Text>
      <Box display={"flex"} justifyContent={{ md: "flex-start", xs: "center" }} gap={1}>
        <Button variant={"primary"} href={"/"}>Go Home</Button>
        <Button variant={"transparent"} href={"/contact"} sx={{ color: "primary.main"}}>Contact Us</Button>
      </Box>
    </Box>
  );
};

interface NotFoundPageProps {}

const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
  return (
    <ContentContainer pageTitle={"Page not found"}>
      <Grid2x1 block1={<Block1 image={"/404.png"} />} block2={<Block2 />} />
    </ContentContainer>
  );
};

export default NotFoundPage;
