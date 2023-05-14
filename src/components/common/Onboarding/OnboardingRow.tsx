import { BackgroundText, Grid2x1 } from "@/components/common";
import { Box, Button, Text } from "@/components/ui";
import Image from "next/image";
import { FC, ReactElement } from "react";
import { Trans } from "react-i18next/TransWithoutContext";

interface Block1Props {
  image: string;
}

const Block1 = ({ image }: Block1Props) => {
  return (
    <Box
      position={{ md: "relative", xs: "absolute" }}
      paddingX={{ md: 8, xs: 0 }}
      borderRadius={0.5}
      width={"100%"}
      minHeight={"100%"}
      overflow={"hidden"}
      bgcolor={"background.missing"}
      sx={{ opacity: { md: 1, xs: 0.2 } }}
    >
      <Image
        src={image}
        alt={""}
        style={{ objectFit: "cover" }}
        fill
      />
    </Box>
  );
};

interface Block2Props {
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
}

const Block2: FC<Block2Props> = ({ title, description, button }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      padding={{ md: 8, xs: 2 }}
    >
      <Text variant={"h1"} component={"h3"} textAlign={"center"}>
        {title}
      </Text>
      <Text variant={"h4"} textAlign={"center"} opacity={0.7} paragraph>
        {description}
      </Text>
      <Button variant={"transparent"} color={"primary"} href={button.href}>
        {button.text}
      </Button>
    </Box>
  );
};

interface BackgroundProps {
  advertising: string;
  reversed?: boolean;
}

const Background: FC<BackgroundProps> = ({ advertising, reversed }) => {
  return (
    <BackgroundText bottom={0} offset={"10%"} sx={{ opacity: { md: 1, xs: 0.2 } }} reversed={reversed}>
      <Text variant={"advertising"}>{advertising}</Text>
    </BackgroundText>
  );
};

export interface OnboardingRowProps {
  image: string;
  advertising: string;
  title: string;
  description: string;
  button: {
    text: string;
    href: string;
  };
  reversed?: boolean;
}

const OnboardingRow = ({ image, advertising, title, description, button, reversed }: OnboardingRowProps) => {
  return (
    <Grid2x1
      block1={<Block1 image={image} />}
      block2={<Block2 title={title} description={description} button={button} />}
      background={<Background advertising={advertising} reversed={reversed} />}
      reversed={reversed}
    />
  );
};

export default OnboardingRow;
