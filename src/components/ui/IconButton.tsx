"use client";

import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";

interface IconButtonProps extends MuiIconButtonProps {
  href?: string;
}

const StyledIconButton: FC<IconButtonProps> = styled(MuiIconButton)<IconButtonProps>(({ theme }) => ({
  zIndex: 0,
  position: "relative",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.component,
  padding: 12,
  borderRadius: theme.shape.borderRadius,
  ":after": {
    zIndex: -1,
    content: "\"\"",
    backgroundColor: theme.palette.primary.light,
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create(["all"], {
      easing: theme.transitions.easing.poof,
      duration: theme.transitions.duration.complex,
    }),
    transform: "scale(0)",
  },
  ":hover, :focus": {
    color: theme.palette.primary.contrastText,
    ":after": {
      transform: "scale(1)",
    },
  },
}));

const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};

export default IconButton;
