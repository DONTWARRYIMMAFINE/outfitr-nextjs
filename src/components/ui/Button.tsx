"use client";

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

export interface ButtonProps extends LoadingButtonProps {
  selected?: boolean;
}

const StyledButton: FC<ButtonProps> = styled(LoadingButton)<ButtonProps>(({ theme, variant, size, selected }) => ({
  zIndex: 1,
  padding: theme.spacing(1.5, 4),
  textTransform: "none",
  ...(variant === "primary" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
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
  ...(variant === "outlined" && {
    ":hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }),
  ...(size === "small" && {
    fontSize: 14,
    padding: theme.spacing(1, 2.5),
  }),
  ...(selected && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
}));

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
