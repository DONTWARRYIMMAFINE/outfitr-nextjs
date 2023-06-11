"use client";

import { ThemeProvider } from "@/components";
import RoutesGuard from "@/components/RoutesGuard";
import SessionProvider from "@/components/SessionProvider";
import { Routes } from "@/constants/routes";
import { createAbility } from "@/lib/casl/ability";
import { AbilityContext } from "@/lib/casl/Can";
import { createEmotionCache } from "@/lib/createEmotionCache";
import { getClient } from "@/lib/graphql/apollo-client";
import { Roles } from "@/lib/graphql/schema.generated";
import { LngProps } from "@/lib/types/params.type";
import { ApolloProvider } from "@apollo/client";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ConfirmProvider } from "material-ui-confirm";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const muiCache = createEmotionCache();

export interface PageProviderProps extends LngProps {
  children: ReactNode;
}

const ability = createAbility([]);

const PageProvider: FC<PageProviderProps> = ({ lng, children }) => {
  const client = getClient();

  return (
    <CacheProvider value={muiCache}>
      <NextThemeProvider enableSystem enableColorScheme>
        <ThemeProvider>
          <CssBaseline enableColorScheme />
          <Toaster />
          <ConfirmProvider
            defaultOptions={{
              confirmationButtonProps: { variant: "primary" },
              cancellationButtonProps: { variant: "transparent" },
            }}
          >
            <NextIntlClientProvider locale={lng}>
              <ApolloProvider client={client}>
                <AbilityContext.Provider value={ability}>
                  <SessionProvider>
                    <RoutesGuard protectedRoutes={[
                      { role: Roles.Customer, route: Routes.Wishlist.href },
                      { role: Roles.Customer, route: Routes.Cart.href },
                      { role: Roles.Customer, route: Routes.Profile.href },
                      { role: Roles.Customer, route: Routes.Addresses.href },
                      { role: Roles.Customer, route: Routes.Orders.href },
                      { role: Roles.Customer, route: Routes.Settings.href },
                      { role: Roles.Customer, route: Routes.LogOut.href },
                      { role: Roles.Customer, route: Routes.Checkout.href },

                      { role: Roles.Partner, route: Routes.Partner.href },
                      { role: Roles.Partner, route: Routes.Brands.href },
                      { role: Roles.Partner, route: Routes.Products.href },
                      { role: Roles.Partner, route: Routes.ReceivedOrders.href },
                    ]}>
                      {children}
                    </RoutesGuard>
                  </SessionProvider>
                </AbilityContext.Provider>
              </ApolloProvider>
            </NextIntlClientProvider>
          </ConfirmProvider>
        </ThemeProvider>
      </NextThemeProvider>
    </CacheProvider>
  );
};

export default PageProvider;
