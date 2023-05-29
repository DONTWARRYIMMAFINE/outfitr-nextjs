"use client";

import { Hidden as MuiHidden, HiddenProps as MuiHiddenProps } from "@mui/material";
import { FC } from "react";

export interface HiddenProps extends MuiHiddenProps {}

const Hidden: FC<HiddenProps> = ({ children, ...props }) => {
  return <MuiHidden {...props}>{children}</MuiHidden>;
};

export default Hidden;
