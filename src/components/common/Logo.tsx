"use client";

import { Box, Text } from "@/components/ui";
import { FC } from "react";

const Logo: FC = () => {
  return (
    <Box display={"flex"}>
      <Text variant={"logo"}>Outfitr</Text>
      <Text variant={"logo"} color={"primary"}>.</Text>
    </Box>
  );
};

export default Logo;
