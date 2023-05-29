"use client";

import { Box, Divider, Text } from "@/components/ui";
import { FC } from "react";
import Stars, { StarsProps } from "../Stars";

interface RatingRowProps extends StarsProps {
  commentsCount: number;
}

const RatingRow: FC<RatingRowProps> = ({ starsCount, commentsCount }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} gap={2}>
      <Stars starsCount={starsCount} />
      <Box width={"100%"}>
        <Divider flexItem />
      </Box>
      <Text variant={"small"} opacity={0.7}>{commentsCount}</Text>
    </Box>
  );
};

export default RatingRow;
