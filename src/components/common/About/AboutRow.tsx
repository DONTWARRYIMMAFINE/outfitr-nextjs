import { BackgroundText, Grid2x1 } from "@/components/common";
import { Box, Image, Text } from "@/components/ui";
import { FC } from "react";

interface Block1Props {
  image: string;
}

const Block1: FC<Block1Props> = ({ image }) => {
  return (
    <Box
      position={{ md: "relative", xs: "absolute" }}
      paddingX={{ md: 8, xs: 0 }}
      borderRadius={0.5}
      width={"100%"}
      minHeight={"100%"}
      overflow={"hidden"}
      sx={{ opacity: { md: 1, xs: 0.2 } }}
    >
      <Image
        priority
        src={image}
        alt={""}
        style={{ objectFit: "cover" }}
        fill
      />
    </Box>
  );
};

interface Block2Props {
  text: string;
}

const Block2: FC<Block2Props> = ({ text }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      padding={{ md: 6, xs: 2 }}
    >
      <Text variant={"p"} paragraph>
        {text}
      </Text>
    </Box>
  );
};

interface BackgroundProps {
  title: string;
  year: number;
  reversed?: boolean;
}

const Background: FC<BackgroundProps> = ({ title, year, reversed }) => {
  return (
    <BackgroundText bottom={0} sx={{ opacity: 0.2 }} reversed={!reversed}>
      <Text variant={"h1"} color={"primary"}>{title}</Text>
      <Text variant={"advertising"} color={"primary"}>{year}</Text>
    </BackgroundText>
  );
};

export interface AboutRowProps {
  image: string;
  text: string;
  background: {
    title: string;
    year: number;
  };
  reversed?: boolean;
}

const AboutRow: FC<AboutRowProps> = ({ image, text, background, reversed }) => {
  return (
    <Grid2x1
      block1={<Block1 image={image} />}
      block2={<Block2 text={text} />}
      background={<Background title={background.title} year={background.year} reversed={reversed} />}
      reversed={reversed}
    />
  );
};

export default AboutRow;
