import { Box, Link, List, ListItem } from "@/components/ui";
import React from "react";

interface Navigation {
  name: string;
  href: string;
  selected: boolean;
}

const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
    selected: true,
  },
  {
    name: "Outfits",
    href: "/category",
    selected: false,
  },
  {
    name: "About",
    href: "/about",
    selected: false,
  },
  {
    name: "Contact Us",
    href: "/contact",
    selected: false,
  },
];

export interface HeaderRoutesProps {
  direction?: "column" | "row";
}

const HeaderRoutes: React.FC<HeaderRoutesProps> = ({ direction }) => {
  return (
    <Box component={"nav"}>
      <List direction={direction}>
        {navigation.map(({ name, href, selected }, index) => {
          return (
            <ListItem key={index}>
              <Link variant={"navigation"} selected={selected} href={href} noWrap showUnderline>
                {name}
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default HeaderRoutes;
