"use client";

import { ThemeProvider } from "@/components";
import { createEmotionCache } from "@/lib/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

const muiCache = createEmotionCache();

export interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({ children }) => {
  return (
    <CacheProvider value={muiCache}>
      <NextThemeProvider enableSystem enableColorScheme>
        <ThemeProvider>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </NextThemeProvider>
    </CacheProvider>
  );
};

export default PageProvider;
