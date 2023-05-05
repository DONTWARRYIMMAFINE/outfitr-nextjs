"use client";

import { Text } from "@/components/ui/index";
import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { styled } from "@mui/material/styles";
import React, { FC } from "react";

declare module "@mui/material/Button" {
  export interface ButtonPropsVariantOverrides {
    primary: true;
    transparent: true;
    drawer: true;
  }
}

const StyledButton: FC<LoadingButtonProps> = styled(LoadingButton)<LoadingButtonProps>(({ theme, variant }) => ({
  padding: theme.spacing(1.5, 4),
  zIndex: 1,
  textTransform: "none",
  ...(variant === "primary" && {
    backgroundColor: theme.palette.primary.main,
    ":hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  ...(variant === "transparent" && {
    textTransform: "none",
  }),
  ...(variant === "drawer" && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

const Button: FC<LoadingButtonProps> = ({ children, loading, color, fullWidth = false, ...props }) => {
  return (
    <StyledButton loading={loading} fullWidth={fullWidth} {...props}>
      <Text variant={"button"} color={loading ? "transparent" : color} noWrap>{children}</Text>
    </StyledButton>
  );
};

export default Button;
