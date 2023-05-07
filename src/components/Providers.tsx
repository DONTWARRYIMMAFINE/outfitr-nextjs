"use client";

import { ThemeProvider } from "@/components";
import RoutesGuard from "@/components/RoutesGuard";
import SessionProvider from "@/components/SessionProvider";
import { Routes } from "@/constants/routes";
import { createEmotionCache } from "@/lib/createEmotionCache";
import { getClient } from "@/lib/graphql/apollo-client";
import { Roles } from "@/lib/graphql/schema.generated";
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
    <CacheProvider value={muiCache}>
      <NextThemeProvider enableSystem enableColorScheme>
        <ThemeProvider>
          <CssBaseline enableColorScheme />
          <Toaster />
          <ApolloProvider client={client}>
            <SessionProvider>
              <RoutesGuard protectedRoutes={[{ role: Roles.Customer, route: Routes.Cart.href }]}>
                {children}
              </RoutesGuard>
            </SessionProvider>
          </ApolloProvider>
        </ThemeProvider>
      </NextThemeProvider>
    </CacheProvider>
  );
};

export default PageProvider;
