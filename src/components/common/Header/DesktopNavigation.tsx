"use client";

import AccountMenu from "@/components/common/Header/AccountMenu";
import { Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { LngProps } from "@/lib/types/params.type";

interface DesktopNavigationProps extends LngProps {}

const DesktopNavigation = ({ lng }: DesktopNavigationProps) => {
  return (
    <Box component={"nav"}>
      <List>
        <ListItem>
          <IconButton href={Routes.Wishlist.href}>
            <Icons.Wishlist />
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton href={Routes.Cart.href}>
            <Icons.Cart />
          </IconButton>
        </ListItem>
        <AccountMenu lng={lng} />
      </List>
    </Box>
  );
};

export default DesktopNavigation;
