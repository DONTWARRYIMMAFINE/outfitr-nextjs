"use client";

import { Badge as MuiBadge, BadgeProps as MuiBadgeProps } from "@mui/material";
import { FC, forwardRef } from "react";

export interface BadgeProps extends MuiBadgeProps {}

const Badge: FC<BadgeProps> = forwardRef(({ children, ...props }, ref) => {
  return <MuiBadge ref={ref} {...props}>{children}</MuiBadge>;
});

Badge.displayName = "Badge";

export default Badge;
