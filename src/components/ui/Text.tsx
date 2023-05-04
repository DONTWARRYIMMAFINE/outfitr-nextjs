"use client";

import { Typography, TypographyProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import { forwardRef } from "react";

export interface TextProps extends TypographyProps<"span", { component?: Variant }> {
  opacity?: number;
}

const Text = forwardRef<HTMLSpanElement, TextProps>(({ children, opacity, sx, textAlign = "left", ...props }, ref) => {
  return <Typography ref={ref} textAlign={textAlign} sx={{ opacity, ...sx }} {...props}>{children}</Typography>;
});

Text.displayName = "Text";

export default Text;
