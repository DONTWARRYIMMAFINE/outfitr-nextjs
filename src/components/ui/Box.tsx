"use client";

import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import { FC } from "react";

export interface BoxProps extends MuiBoxProps {}

const Box: FC<BoxProps> = ({ children, ...props }) => {
  return <MuiBox {...props}>{children}</MuiBox>;
};

Box.displayName = "Box";

export default Box;
