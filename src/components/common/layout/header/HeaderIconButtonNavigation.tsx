"use client";

import { Box, IconButton, Icons, List, ListItem } from "@/components/ui";
import { FC, ReactNode } from "react";

interface HeaderIconButtonNavigationItem {
  icon: ReactNode;
  href: string;
}

const navigation: HeaderIconButtonNavigationItem[] = [
  { icon: <Icons.Wishlist />, href: "/wishlist" },
  { icon: <Icons.Cart />, href: "/cart" },
  { icon: <Icons.Profile />, href: "/account" },
];

const HeaderIconButtonNavigation: FC = () => {
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
      </List>
    </Box>
  );
};

export default HeaderIconButtonNavigation;
