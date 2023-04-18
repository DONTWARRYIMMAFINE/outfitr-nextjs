"use client";

import { AppBar as MuiAppBar, AppBarProps as MuiAppBarProps, useTheme } from "@mui/material";
import { FC } from "react";

interface AppBarProps extends MuiAppBarProps {}

const AppBar: FC<AppBarProps> = ({ children, sx, ...props }) => {
  const { palette, spacing } = useTheme();

  return (
    <MuiAppBar
      position={"sticky"}
      elevation={0}
      color={"default"}
      enableColorOnDark
      sx={{
        bgcolor: palette.background.header,
        padding: spacing(1.5, 0),
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiAppBar>
  );
};

export default AppBar;
