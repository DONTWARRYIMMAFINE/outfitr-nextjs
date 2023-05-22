"use client";

import { CardMedia as MuiCardMedia, CardMediaProps as MuiCardMediaProps } from "@mui/material";
import { FC, forwardRef } from "react";

export interface CardMediaProps extends MuiCardMediaProps<"img"> {}

const CardMedia = ({ children, ...props }: CardMediaProps) => {
  return <MuiCardMedia {...props}>{children}</MuiCardMedia>;
};

CardMedia.displayName = "CardMedia";

export default CardMedia;
