"use client";

import { Card as MuiCard, CardProps as MuiCardProps } from "@mui/material";
import { FC, forwardRef } from "react";

export interface CardProps extends MuiCardProps {}



const Card: FC<CardProps> = forwardRef<
  HTMLDivElement, CardProps
>(({ children, sx, ...props }, ref) => {
  return (
    <MuiCard
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        borderRadius: 0.25,
        boxShadow: 0,
        backgroundImage: "none",
        ...sx
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
});

Card.displayName = "Card";

export default Card;
