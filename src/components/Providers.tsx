"use client";

import { ThemeProvider } from "@/components";
import SessionProvider from "@/components/SessionProvider";
import { protectedRoutes } from "@/constants/route";
import { createEmotionCache } from "@/lib/createEmotionCache";
import { getClient } from "@/lib/graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const muiCache = createEmotionCache();

export interface PageProviderProps {
  children: ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({ children }) => {
  const client = getClient();

  return (
    <ApolloProvider client={client}>
      <SessionProvider protectedRoutes={protectedRoutes}>
        <CacheProvider value={muiCache}>
          <NextThemeProvider enableSystem enableColorScheme>
            <ThemeProvider>
              <CssBaseline enableColorScheme />
              <Toaster />
              {children}
            </ThemeProvider>
          </NextThemeProvider>
        </CacheProvider>
      </SessionProvider>
    </ApolloProvider>
  );
};

export default PageProvider;
