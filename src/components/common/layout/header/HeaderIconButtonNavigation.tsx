import { Box, CartIcon, IconButton, List, ListItem, ProfileIcon, WishlistIcon } from "@/components/ui";
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
