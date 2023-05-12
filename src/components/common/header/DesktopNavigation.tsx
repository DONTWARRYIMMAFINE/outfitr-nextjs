"use client";

import AccountMenu from "@/components/common/header/AccountMenu";
import { Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { FC } from "react";

interface DesktopNavigationProps {}

const DesktopNavigation: FC<DesktopNavigationProps> = ({}) => {
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
