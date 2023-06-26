"use client";

import { IconButton, Icons, Menu } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { usePathname } from "next-intl/client";
import { MouseEvent, useState } from "react";
import AccountMenuNavigation from "./AccountMenuNavigation";

const AccountMenu = () => {
  const pathname = usePathname();
  const user = useReactiveVar((loggedInUser));
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActive = [
    Routes.Partner.href,
    Routes.Profile.href,
    Routes.LogIn.href,
    Routes.SignUp.href,
  ].includes(pathname);

  return (<>
    <IconButton onClick={handleClick}>
      {user ?
        <Icons.PersonLoggedIn sx={{ color: isActive ? "primary.main" : "text.primary" }} /> :
        <Icons.Person sx={{ color: isActive ? "primary.main" : "text.primary" }} />
      }
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
      <AccountMenuNavigation />
    </Menu>
  </>);
};

export default AccountMenu;
