"use client";

import LogOut from "@/components/common/LogOut";
import { Avatar, Box, Link, List, ListItem, Text } from "@/components/ui";
import { Routes, RouteValue } from "@/constants/routes";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";

interface UserNavigationProps extends WithTranslation {
  routes: RouteValue[];
  redirectUrl?: string;
}

const UserNavigation: FC<UserNavigationProps> = ({ routes, redirectUrl = Routes.Home.href, t }) => {
  const user = useReactiveVar(loggedInUser);

  return (
    <Box display={"flex"} gap={2}>
      <Avatar src={user?.avatar?.url}/>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <Text variant={"p"} fontWeight={700}>{user?.fullName}</Text>
        <List direction={"column"}>
          {routes.map((route, index) => {
            if (route.title === Routes.LogOut.title) {
              return (
                <ListItem key={index}>
                  <LogOut />
                </ListItem>
              );
            }
            return (
              <ListItem key={index}>
                <Link href={route.href}>
                  {t(route.i18nKey)}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default withTranslation("navigation")(UserNavigation);
