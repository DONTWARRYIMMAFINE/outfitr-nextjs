"use client";

import CategoriesMenu from "@/components/common/header/CategoriesMenu";
import { Box, Link, List, ListItem } from "@/components/ui";
import { Routes, RouteValue } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { FC } from "react";

const navigation: RouteValue[] = [Routes.Home, Routes.Catalog, Routes.About, Routes.Contact, Routes.Demo];

export interface HeaderRoutesProps {
  direction?: "column" | "row";
}

const LinkNavigation: FC<HeaderRoutesProps> = ({ direction }) => {
  const activePathname = usePathname();

  return (
    <Box component={"nav"}>
      <List direction={direction}>
        {navigation.map(({ title, href }, index) => {
          if (title === Routes.Catalog.title) {
            return (
              <CategoriesMenu key={index}/>
            )
          }

          return (
            <ListItem key={index}>
              <Link selected={activePathname === href} href={href} noWrap showUnderline>
                {title}
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );
};

export default LinkNavigation;
