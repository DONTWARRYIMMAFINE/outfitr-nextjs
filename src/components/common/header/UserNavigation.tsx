import LogOut from "@/components/common/LogOut";
import { Box, Link, ListItem } from "@/components/ui";
import { Routes, RouteValue } from "@/constants/routes";
import { FC } from "react";

interface UserNavigationProps {
  routes: RouteValue[];
  redirectUrl?: string;
}

const UserNavigation: FC<UserNavigationProps> = ({ routes, redirectUrl = Routes.Home.href }) => {
  return (
    <Box component={"ul"}>
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
              {route.title}
            </Link>
          </ListItem>
        );
      })}
    </Box>
  );
};

export default UserNavigation;
