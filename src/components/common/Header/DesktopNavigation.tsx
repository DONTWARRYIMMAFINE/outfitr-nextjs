"use client";

import AccountMenu from "@/components/common/Header/AccountMenu";
import { Badge, Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { userCart, userWishlist } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";

const DesktopNavigation = () => {
  const cart = useReactiveVar(userCart);
  const wishlist = useReactiveVar(userWishlist);

  return (
    <Box component={"nav"}>
      <List>
        <ListItem>
          <IconButton href={Routes.Wishlist.href}>
            <Badge color={"primary"} badgeContent={wishlist?.products.length} invisible={wishlist?.products.length === 0}>
              <Icons.Wishlist />
            </Badge>
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton href={Routes.Cart.href}>
            <Badge color={"primary"} badgeContent={cart?.quantity} invisible={cart?.quantity === 0}>
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
