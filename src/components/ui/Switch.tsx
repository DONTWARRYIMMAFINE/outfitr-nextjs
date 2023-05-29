"use client";

import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from "@mui/material";
import { forwardRef } from "react";

export interface SwitchProps extends MuiSwitchProps {}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  return <MuiSwitch ref={ref} {...props} />;
});

Switch.displayName = "Switch";

export default Switch;
