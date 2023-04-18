"use client";

import { Toolbar as MuiToolbar, ToolbarProps as MuiToolBarProps } from "@mui/material";
import { FC } from "react";

interface ToolBarProps extends MuiToolBarProps {}

const Toolbar: FC<ToolBarProps> = ({ children, sx, disableGutters = true, ...props }) => {
  return (
    <MuiToolbar
      disableGutters={disableGutters}
      sx={{ justifyContent: "space-between", ...sx }}
      {...props}
    >
      {children}
    </MuiToolbar>
  );
};

export default Toolbar;
