"use client";

import { darkTheme, lightTheme } from "@/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import { FC, ReactNode, useEffect, useState } from "react";

export interface MuiThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <MuiThemeProvider theme={resolvedTheme === "dark" ? darkTheme : lightTheme}>
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
