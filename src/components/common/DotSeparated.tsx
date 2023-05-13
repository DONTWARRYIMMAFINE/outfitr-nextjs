import { Dot } from "@/components/common";
import { Box, Hidden, Text } from "@/components/ui";
import { TString } from "@/lib/types/params.type";
import { FC } from "react";

export interface DotSeparatedProps {
  sentences: TString[];
}

const DotSeparated: FC<DotSeparatedProps> = ({ sentences }) => {
  return (
    <Box display={"flex"} flexDirection={{ md: "row", xs: "column" }} gap={1}>
      <Hidden mdDown>
        <Dot />
      </Hidden>
      {sentences.map((sentence, i) => (
          <Box key={i} display={"flex"} flexGrow={1} justifyContent={{ md: "space-around", xs: "space-between" }} gap={1}>
            <Text variant={"p"} opacity={0.5}>{sentence}</Text>
            <Dot />
          </Box>
        ),
      )}
    </Box>
  );
};

export default DotSeparated;
