"use client";

import { Typography, TypographyProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { forwardRef } from "react";

export interface TextProps extends TypographyProps<"span", { component?: Variant }> {}

const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, ...props }, ref) => {
  return <Typography ref={ref} {...props}>{children}</Typography>;
});

Text.displayName = "Text";

export default Text;
