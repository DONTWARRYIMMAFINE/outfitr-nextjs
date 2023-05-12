import { Link, ListItem } from "@/components/ui";
import { RouteValue } from "@/constants/routes";
import { FC } from "react";

interface GuestNavigationProps {
  routes: RouteValue[];
}

const GuestNavigation: FC<GuestNavigationProps> = ({ routes }) => {
  return (<>
    {routes.map((route, index) => (
      <ListItem sx={{ marginY: 1 }}>
        <Link key={index} href={route.href}>
          {route.title}
        </Link>
      </ListItem>
    ))}
  </>);
};

export default GuestNavigation;
