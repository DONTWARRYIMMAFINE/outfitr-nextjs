"use client";

import { Grid as MuiGrid, GridProps as MuiGridProps } from "@mui/material";
import { FC } from "react";

const Grid: FC<MuiGridProps> = ({ children, ...props }) => {
  return <MuiGrid {...props}>{children}</MuiGrid>;
};

export default Grid;
