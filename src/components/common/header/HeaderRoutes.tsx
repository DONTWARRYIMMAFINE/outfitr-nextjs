import { Box, Link, List, ListItem } from "@/components/ui";
import { FC } from "react";

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
  {
    name: "demo",
    href: "/demo",
    selected: false,
  },
];

export interface HeaderRoutesProps {
  direction?: "column" | "row";
}

const HeaderRoutes: FC<HeaderRoutesProps> = ({ direction }) => {
  return (
    <Box component={"nav"}>
      <List direction={direction}>
        {navigation.map(({ name, href, selected }, index) => (
          <ListItem key={index}>
            <Link selected={selected} href={href} noWrap showUnderline>
              {name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default HeaderRoutes;
