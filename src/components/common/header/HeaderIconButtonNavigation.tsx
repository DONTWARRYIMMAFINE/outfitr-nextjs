"use client";

import { Box, Button, IconButton, Icons, List, ListItem, Text } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { LOCAL_STORAGE_TOKEN } from "@/constants/token";
import { useLogoutMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC, ReactNode } from "react";

interface HeaderIconButtonNavigationItem {
  icon: ReactNode;
  href: string;
}

const navigation: HeaderIconButtonNavigationItem[] = [
  { icon: <Icons.Wishlist />, href: Routes.Wishlist.href },
  { icon: <Icons.Cart />, href: Routes.Cart.href },
  { icon: <Icons.Profile />, href: Routes.Profile.href },
];

const HeaderIconButtonNavigation: FC = () => {
  const user = useReactiveVar(loggedInUser);
  const [logoutMutation, { client }] = useLogoutMutation();

  const onLogout = async () => {
    await Promise.all([logoutMutation(), client.resetStore()]);
    localStorage.removeItem(LOCAL_STORAGE_TOKEN);
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
