"use client";

import { Box, Link, List, ListItem } from "@/components/ui";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface Navigation {
  name: string;
  href: string;
}

const navigation: Navigation[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Outfits",
    href: "/category",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "demo",
    href: "/demo",
  },
];

export interface HeaderRoutesProps {
  direction?: "column" | "row";
}

const HeaderRoutes: FC<HeaderRoutesProps> = ({ direction }) => {
  const activePathname = usePathname();

  return (
    <Box component={"nav"}>
      <List direction={direction}>
        {navigation.map(({ name, href }, index) => (
          <ListItem key={index}>
            <Link selected={activePathname === href} href={href} noWrap showUnderline>
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HeaderRoutes;
