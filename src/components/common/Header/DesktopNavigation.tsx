"use client";

import AccountMenu from "@/components/common/Header/AccountMenu";
import { Badge, Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";

const DesktopNavigation = () => {
  const user = useReactiveVar(loggedInUser);

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
            <Badge color={"primary"} badgeContent={user?.cart.quantity} invisible={!user}>
              <Icons.Cart />
            </Badge>
          </IconButton>
        </ListItem>
        <AccountMenu />
      </List>
    </Box>
  );
};

export default DesktopNavigation;
