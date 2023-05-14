"use client";

import { Link, ListItem } from "@/components/ui";
import { RouteValue } from "@/constants/routes";
import { withTranslation, WithTranslation } from "react-i18next";
import { Trans } from "react-i18next/TransWithoutContext";

interface GuestNavigationProps extends WithTranslation {
  routes: RouteValue[];
}

const GuestNavigation = ({ routes, t }: GuestNavigationProps) => {
  return (<>
    {routes.map((route, index) => (
      <ListItem key={index} sx={{ marginY: 1 }}>
        <Link href={route.href}>
          <Trans i18nKey={route.i18nKey} t={t} />
        </Link>
      </ListItem>
    ))}
  </>);
};

export default withTranslation("navigation")(GuestNavigation);
