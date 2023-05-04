"use client";

import { Box as MuiBox, BoxProps } from "@mui/material";
import { FC } from "react";

const Box: FC<BoxProps> = ({ children, ...props }) => {
  return <MuiBox {...props}>{children}</MuiBox>;
};

Box.displayName = "Box";

export default Box;
