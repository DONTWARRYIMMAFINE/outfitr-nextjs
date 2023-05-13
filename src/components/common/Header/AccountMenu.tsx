"use client";

import GuestNavigation from "@/components/common/Header/GuestNavigation";
import UserNavigation from "@/components/common/Header/UserNavigation";
import { IconButton, Icons, Menu } from "@/components/ui";
import { guestMenuRoutes, userMenuRoutes } from "@/constants/routes";
import { LngProps } from "@/lib/types/params.type";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { MouseEvent, useState } from "react";

export interface AccountMenu extends LngProps {}

const AccountMenu = ({ lng }: AccountMenu) => {
  const user = useReactiveVar((loggedInUser));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
    <IconButton onClick={handleClick}>
      {user ? <Icons.PersonLoggedIn /> : <Icons.Person />}
    </IconButton>
    <Menu
      id={"account-menu"}
      anchorEl={anchorEl}
      open={open}
      onClick={handleClose}
      onClose={handleClose}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {user ?
        <UserNavigation routes={userMenuRoutes} /> :
        <GuestNavigation routes={guestMenuRoutes} lng={lng} />
      }
    </Menu>
  </>);
};

export default AccountMenu;
