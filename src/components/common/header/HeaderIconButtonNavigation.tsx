"use client";

import { Box, Button, CartIcon, IconButton, List, ListItem, ProfileIcon, Text, WishlistIcon } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { useLogoutMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC, ReactNode } from "react";

interface HeaderIconButtonNavigationItem {
  icon: ReactNode;
  href: string;
}

const navigation: HeaderIconButtonNavigationItem[] = [
  { icon: <WishlistIcon />, href: Routes.Wishlist.href },
  { icon: <CartIcon />, href: Routes.Cart.href },
  { icon: <ProfileIcon />, href: Routes.Profile.href },
];

const HeaderIconButtonNavigation: FC = () => {
  const user = useReactiveVar(loggedInUser);
  const [logoutMutation, { client }] = useLogoutMutation();

  const onLogout = async () => {
    await Promise.all([logoutMutation(), client.resetStore()]);
    localStorage.removeItem("token");
    loggedInUser(null);
  };

  return (
    <Box component={"nav"}>
      <List>
        {navigation.map(({ icon, href }, index) => {
          return (
            <ListItem key={index}>
              <IconButton href={href}>
                {icon}
              </IconButton>
            </ListItem>
          );
        })}
        {user ?
          (<Box display={"flex"}>
            <Text>{user.fullName}</Text>
            <Button variant={"primary"} onClick={() => onLogout()}>Logout</Button>
          </Box>) :
          (<Button variant={"primary"} href={"/login"}>Login</Button>)
        }
      </List>
    </Box>
  );
};

export default HeaderIconButtonNavigation;
