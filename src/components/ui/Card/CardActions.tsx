"use client";

import { CardActions as MuiCardActions, CardActionsProps as MuiCardActionsProps } from "@mui/material";
import { forwardRef } from "react";

export interface CardActionsProps extends MuiCardActionsProps {}

const CardActions = forwardRef<
  HTMLDivElement, CardActionsProps
>(({ children, ...props }, ref) => {
  return <MuiCardActions ref={ref} {...props}>{children}</MuiCardActions>;
});

CardActions.displayName = "CardActions";

export default CardActions;
