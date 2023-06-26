import { Dot } from "@/components/common";
import { Box, Hidden, Text } from "@/components/ui";
import { FC } from "react";

export interface DotSeparatedProps {
  messages: string[];
}

const DotSeparated: FC<DotSeparatedProps> = ({ messages }) => {
  return (
    <Box display={"flex"} flexDirection={{ md: "row", xs: "column" }} gap={1}>
      <Hidden mdDown>
        <Dot color={"primary.main"} />
      </Hidden>
      {messages.map((sentence, i) => (
          <Box key={i} display={"flex"} flexGrow={1} justifyContent={{ md: "space-around", xs: "space-between" }} gap={1}>
            <Text variant={"p"} opacity={0.5}>{sentence}</Text>
            <Dot color={"primary.main"} />
          </Box>
        ),
      )}
    </Box>
  );
};

export default DotSeparated;
