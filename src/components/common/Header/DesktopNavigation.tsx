"use client";

import AccountMenu from "@/components/common/Header/AccountMenu";
import { Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { Routes } from "@/constants/routes";

const DesktopNavigation = () => {
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
        <AccountMenu />
      </List>
    </Box>
  );
};

export default DesktopNavigation;
