"use client";

import { Divider as MuiDivider, DividerProps } from "@mui/material";
import { FC } from "react";

const Divider: FC<DividerProps> = ({ orientation, sx, children, ...props }) => {
  return <MuiDivider orientation={orientation} sx={{ marginY: orientation === "horizontal" ? 2 : 1, ...sx }} {...props}>{children}</MuiDivider>;
};

export default Divider;
