"use client";

import { LogOut } from "@/components/common";
import { Link, List, ListItem } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes, RouteValue } from "@/constants/routes";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface NavigationListProps extends WithTranslation {
  routes: RouteValue[];
}

const NavigationList: FC<NavigationListProps> = ({ routes, t }) => {
  return (
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
            <Link href={{ pathname: route.href, query: route.query }}>
              {t(route.i18nKey)}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default withTranslation(I18NS.Route)(NavigationList);
