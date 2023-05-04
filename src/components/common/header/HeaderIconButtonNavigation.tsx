"use client";

import { Box, Button, CartIcon, IconButton, List, ListItem, ProfileIcon, Text, WishlistIcon } from "@/components/ui";
import authenticated from "@/constants/authenticated";
import { useLogoutMutation, useMeQuery } from "@/lib/graphql/schema.generated";
import { useReactiveVar } from "@apollo/client";
import { FC, ReactNode } from "react";

interface HeaderIconButtonNavigationItem {
  icon: ReactNode;
  href: string;
}

const navigation: HeaderIconButtonNavigationItem[] = [
  { icon: <WishlistIcon />, href: "/wishlist" },
  { icon: <CartIcon />, href: "/cart" },
  { icon: <ProfileIcon />, href: "/account" },
];

const HeaderIconButtonNavigation: FC = () => {
  const isAuthenticated = useReactiveVar(authenticated);
  const { data, refetch, client } = useMeQuery();
  const [logoutMutation] = useLogoutMutation();
  const user = data?.me;

  const onLogout = async () => {
    await logoutMutation();
    localStorage.removeItem("token");
    authenticated(false);
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
        {isAuthenticated ?
          (<Box display={"flex"}>
            <Text>{user?.fullName}</Text>
            <Button variant={"primary"} onClick={() => onLogout()}>Logout</Button>
          </Box>) :
          (<Button variant={"primary"} href={"/login"}>Login</Button>)
        }
      </List>
    </Box>
  );
};

export default HeaderIconButtonNavigation;
