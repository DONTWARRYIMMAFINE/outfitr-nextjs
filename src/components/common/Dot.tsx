import { Box } from "@/components/ui";
import { FC } from "react";

export interface DotProps {
  radius?: number;
  color: string;
}

const Dot: FC<DotProps> = ({radius = 6, color}) => {
  return (
    <Box
      width={radius * 2}
      height={radius * 2}
      borderRadius={1}
      alignSelf={"center"}
      bgcolor={color}
    />);
};

export default Dot;
