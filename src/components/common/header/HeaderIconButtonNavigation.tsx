"use client";

import { Box, Button, CartIcon, IconButton, List, ListItem, ProfileIcon, Text, WishlistIcon } from "@/components/ui";
import { useUser } from "@/hooks/useUser";
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
  const { user } = useUser();
  const [logoutMutation] = useLogoutMutation();

  const onLogout = async () => {
    await logoutMutation();
    localStorage.removeItem("token");
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
