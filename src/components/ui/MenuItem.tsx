"use client";

import { MenuItem as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";

const StyledMenuItem: FC<MuiMenuItemProps> = styled(MuiMenuItem)<MuiMenuItemProps>(({ theme }) => ({
  transition: theme.transitions.create(["all"]),
  ":hover": {
    color: theme.palette.primary.main,
  },
}));

interface MenuItemProps extends MuiMenuItemProps {}

const MenuItem: FC<MenuItemProps> = ({ sx, children, ...props }) => {
  return <StyledMenuItem sx={{ borderRadius: 0.25, ...sx }} {...props}>{children}</StyledMenuItem>;
};

export default MenuItem;
