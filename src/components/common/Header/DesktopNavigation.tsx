"use client";

import AccountMenu from "@/components/common/Header/AccountMenu";
import { Badge, Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { userCart, userWishlist } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { usePathname } from "next-intl/client";

const DesktopNavigation = () => {
  const pathname = usePathname();
  const cart = useReactiveVar(userCart);
  const wishlist = useReactiveVar(userWishlist);

  return (
    <Box component={"nav"}>
      <List>
        <ListItem>
          <IconButton href={Routes.Wishlist.href}>
            <Badge color={"primary"} badgeContent={wishlist?.products.length} invisible={wishlist?.products.length === 0}>
              <Icons.Wishlist sx={{ color: pathname === Routes.Wishlist.href ? "primary.main" : "text.primary" }} />
            </Badge>
          </IconButton>
        </ListItem>
        <ListItem>
          <IconButton href={Routes.Cart.href}>
            <Badge color={"primary"} badgeContent={cart?.quantity} invisible={cart?.quantity === 0}>
              <Icons.Cart sx={{ color: [Routes.Cart.href, Routes.Checkout.href].includes(pathname) ? "primary.main" : "text.primary" }} />
            </Badge>
          </IconButton>
        </ListItem>
        <AccountMenu />
      </List>
    </Box>
  );
};

export default DesktopNavigation;
