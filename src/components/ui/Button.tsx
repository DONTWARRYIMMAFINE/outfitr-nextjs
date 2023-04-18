"use client";

import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";

declare module "@mui/material/Button" {
  export interface ButtonPropsVariantOverrides {
    primary: true;
    transparent: true;
    drawer: true;
  }
}

export interface ButtonProps extends MuiButtonProps {}

const Button: FC<ButtonProps> = styled(MuiButton)<ButtonProps>(({ theme, variant }) => ({
  padding: theme.spacing(1.5, 3),
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
})) as typeof MuiButton;

export default Button;
