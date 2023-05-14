"use client";

import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from "@mui/material";
import { forwardRef } from "react";

export interface TabsProps extends MuiTabsProps {}

const Tabs = forwardRef<HTMLButtonElement, TabsProps>(({ children, ...props }: TabsProps, ref) => {
  return (
    <MuiTabs ref={ref} {...props}>
      {children}
    </MuiTabs>
  );
});

Tabs.displayName = "Tabs";

export default Tabs;
