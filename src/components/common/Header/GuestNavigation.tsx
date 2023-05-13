"use client";

import { Link, ListItem } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { RouteValue } from "@/constants/routes";
import { useTranslation } from "@/lib/i18n/client";
import { LngProps } from "@/lib/types/params.type";
import { Trans } from "react-i18next/TransWithoutContext";

interface GuestNavigationProps extends LngProps {
  routes: RouteValue[];
}

const GuestNavigation = ({ routes, lng }: GuestNavigationProps) => {
  const { t } = useTranslation(lng, I18NS.NAVIGATION);

  return (<>
    {routes.map((route, index) => (
      <ListItem sx={{ marginY: 1 }}>
        <Link key={index} href={route.href}>
          <Trans i18nKey={route.i18nKey} t={t} />
        </Link>
      </ListItem>
    ))}
  </>);
};

export default GuestNavigation;
