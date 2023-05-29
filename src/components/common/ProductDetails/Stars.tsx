import { Box } from "@/components/ui";
import { FC } from "react";
import Icons from "../../ui/Icons";

export interface StarsProps {
  starsCount: number;
}

const Stars: FC<StarsProps> = ({ starsCount }) => {
  return (
    <Box display={"flex"} gap={1}>
      {[...Array(starsCount)].map((item, i) => (
        <Icons.StarEmpty key={i} />
      ))}
    </Box>
  );
};

export default Stars;
