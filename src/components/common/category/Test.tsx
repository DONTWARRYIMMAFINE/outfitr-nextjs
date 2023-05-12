"use client";

import { Box, Text } from "@/components/ui";
import { useParams } from "next/navigation";
import { FC } from "react";

interface TestProps {
  code?: string[];
}

const Test: FC<TestProps> = () => {
  const { code } = useParams();
  console.log(code.split("/"));
  return (
    <Box display={"flex"} flexDirection={"row"}>
      <Text variant={"h2"}>{code}</Text>
      {code.split("/").map((c, index) => (
        <Box key={index}>
          <Text variant={"small"}>{c}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Test;
