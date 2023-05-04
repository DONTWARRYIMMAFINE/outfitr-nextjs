import { Box, Button, Text } from "@/components/ui";
import Image from "next/image";
import { FC } from "react";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  return (
    <Box
      display={"flex"}
      flex={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"relative"}
      flexDirection={{ md: "row", xs: "column-reverse" }}
      height={"90vh"}
    >
      <Box
        flexBasis={"50%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={6}
          padding={{ md: 8, xs: 2 }}
        >
          <Text variant={"h1"} component={"h3"}>
            Confused about your outfit?<br />
            Find the best outfit here!
          </Text>
          <Box>
            <Text variant={"h4"} paragraph>
              Explore different categories. Find the best ideas.
            </Text>
          </Box>
          <Button variant={"primary"} href="#">
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexBasis={"50%"}
        minWidth={{ md: "auto", xs: "100%" }}
        height={"100%"}
        flexGrow={1}
        position={"relative"}
        paddingX={{ md: 8, xs: 0 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src={"/pattern2.png"}
          alt={"Oops"}
          style={{ objectFit: "contain" }}
          fill
        />
      </Box>
    </Box>
  );
};

export default Welcome;
