"use client";

import { Switch as MuiSwitch, SwitchProps as MuiSwitchProps } from "@mui/material";
import { forwardRef } from "react";

interface SwitchProps extends MuiSwitchProps {}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  return <MuiSwitch ref={ref} {...props} />;
});

export default Switch;
