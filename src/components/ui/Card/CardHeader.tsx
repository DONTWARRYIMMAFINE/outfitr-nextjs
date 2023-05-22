"use client";

import { CardHeader as MuiCardHeader, CardHeaderProps as MuiCardHeaderProps } from "@mui/material";
import { forwardRef } from "react";

export interface CardHeaderProps extends MuiCardHeaderProps {}

const CardHeader = forwardRef<
  HTMLDivElement, CardHeaderProps
>(({ children, ...props }, ref) => {
  return <MuiCardHeader ref={ref} {...props}>{children}</MuiCardHeader>;
});

CardHeader.displayName = "CardHeader";

export default CardHeader;
