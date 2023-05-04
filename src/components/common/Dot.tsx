import { Box } from "@/components/ui";
import { FC } from "react";

export interface DotProps {}

const Dot: FC<DotProps> = ({}) => {
  return <Box width={12} height={12} borderRadius={1} alignSelf={"center"} bgcolor={"primary.main"} />;
};

export default Dot;
