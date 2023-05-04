"use client";

import { Grid2x1 } from "@/components/common";
import { Box, Button, Text, TextField } from "@/components/ui";
import Image from "next/image";
import { FC } from "react";

interface Block1Props {
  image: string;
}

const Block1: FC<Block1Props> = ({ image }) => {
  return (
    <Box position={{ md: "relative", xs: "absolute" }} width={"100%"} minHeight={"100%"} sx={{ opacity: { md: 1, xs: 0.2 } }}>
      <Image
        src={image}
        alt={""}
        style={{ objectFit: "cover" }}
        fill
      />
    </Box>
  );
};

interface Block2Props {}

const Block2: FC<Block2Props> = ({}) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      padding={{ md: 8, xs: 2 }}
    >
      <Text variant={"h1"} component={"h2"}>
        Join Our<br />
        Newsletter
      </Text>
      <Text variant={"subtitle1"}>
        Receive exclusive deals, discounts and many offers.
      </Text>
      <TextField label="Email" variant="outlined" margin={"normal"} size={"small"} />
      <Box marginTop={2}>
        <Button variant={"primary"}>
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

const NewsSubscribe = () => {
  return <Grid2x1 block1={<Block1 image={"/news.jpg"} />} block2={<Block2 />} />;
};

export default NewsSubscribe;
