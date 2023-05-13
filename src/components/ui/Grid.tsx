"use client";

import { Grid as MuiGrid, GridProps as MuiGridProps } from "@mui/material";
import { forwardRef } from "react";

const Grid = forwardRef<
  HTMLDivElement, MuiGridProps
>(({ children, ...props }, ref) => {
  return <MuiGrid ref={ref} {...props}>{children}</MuiGrid>;
});

Grid.displayName = "Grid";

export default Grid;
