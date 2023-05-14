"use client";

import { Tab as MuiTab, TabProps as MuiTabProps } from "@mui/material";
import { forwardRef } from "react";

interface TabProps extends MuiTabProps {}

const Tab = forwardRef<HTMLDivElement, TabProps>(({ sx, children, ...props }: TabProps, ref) => {
  return (
    <MuiTab ref={ref} sx={{borderRadius: 1}} {...props}>
      {children}
    </MuiTab>
  );
});

Tab.displayName = "Tab";

export default Tab;
