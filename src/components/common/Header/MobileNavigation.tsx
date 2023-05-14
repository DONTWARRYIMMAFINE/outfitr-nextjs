"use client";

import GuestNavigation from "@/components/common/Header/GuestNavigation";
import UserNavigation from "@/components/common/Header/UserNavigation";
import { Box, Link, List, ListItem } from "@/components/ui";
import { guestMenuRoutes, Routes, userMenuRoutes } from "@/constants/routes";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";

const MobileNavigation = () => {
  const user = useReactiveVar((loggedInUser));

  return (
    <Box component={"nav"}>
      <List>
        <ListItem>
          <Link href={Routes.Wishlist.href} noWrap showUnderline>
            {Routes.Wishlist.title}
          </Link>
        </ListItem>
        <ListItem>
          <Link href={Routes.Cart.href} noWrap showUnderline>
            {Routes.Cart.title}
          </Link>
        </ListItem>
        {user ?
          <UserNavigation routes={userMenuRoutes} /> :
          <GuestNavigation routes={guestMenuRoutes}/>
        }
      </List>
    </Box>
  );
};

export default MobileNavigation;
