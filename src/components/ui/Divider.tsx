"use client";

import { Divider as MuiDivider, DividerProps } from "@mui/material";
import { FC } from "react";

const Divider: FC<DividerProps> = ({ sx, children, ...props }) => {
  return <MuiDivider sx={{ marginY: 2, ...sx }} {...props}>{children}</MuiDivider>;
};

export default Divider;
