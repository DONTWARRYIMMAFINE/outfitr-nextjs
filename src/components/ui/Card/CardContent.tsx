"use client";

import { CardContent as MuiCardContent, CardContentProps as MuiCardContentProps } from "@mui/material";
import { forwardRef } from "react";

export interface CardContentProps extends MuiCardContentProps {}

const CardContent = forwardRef<
  HTMLDivElement, CardContentProps
>(({ children, ...props }, ref) => {
  return <MuiCardContent ref={ref} {...props}>{children}</MuiCardContent>;
});

CardContent.displayName = "CardContent";

export default CardContent;
