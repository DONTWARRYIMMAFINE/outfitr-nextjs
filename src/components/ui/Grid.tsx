"use client";

import { Grid as MuiGrid, GridProps as MuiGridProps } from "@mui/material";
import { forwardRef } from "react";

export interface GridProps extends MuiGridProps {}

const Grid = forwardRef<
  HTMLDivElement, GridProps
>(({ children, ...props }, ref) => {
  return <MuiGrid ref={ref} {...props}>{children}</MuiGrid>;
});

Grid.displayName = "Grid";

export default Grid;
