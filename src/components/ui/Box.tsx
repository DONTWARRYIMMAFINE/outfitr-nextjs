"use client";

import { Box as MuiBox, BoxProps as MuiBoxProps } from "@mui/material";
import { forwardRef } from "react";

export interface BoxProps extends MuiBoxProps {}

const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => {
  return <MuiBox ref={ref} {...props}>{children}</MuiBox>;
});

Box.displayName = "Box";

export default Box;
