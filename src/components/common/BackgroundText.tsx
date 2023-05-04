import { Box } from "@/components/ui";
import { BoxProps } from "@mui/material";
import { FC } from "react";

export interface ShadowTitleProps extends BoxProps {
  offset?: string | number;
  reversed?: boolean;
}

const BackgroundText: FC<ShadowTitleProps> = ({ children, sx, reversed, offset = 0, ...props }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={reversed ? "flex-start" : "flex-end"}
      position={"absolute"}
      left={reversed ? undefined : offset}
      right={reversed ? offset : undefined}
      sx={sx}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BackgroundText;
