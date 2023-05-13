"use client";

import CategoriesMenu from "@/components/common/header/CategoriesMenu";
import { Box, Link, List, ListItem } from "@/components/ui";
import { Routes, RouteValue } from "@/constants/routes";
import { useTranslation } from "@/lib/i18n/client";
import { LngProps } from "@/lib/types/params.type";
import { usePathname } from "next/navigation";
import { Trans } from "react-i18next/TransWithoutContext";

const navigation: RouteValue[] = [Routes.Home, Routes.Catalog, Routes.About, Routes.Contact, Routes.Demo];

export interface HeaderRoutesProps extends LngProps {
  direction?: "column" | "row";
}

const LinkNavigation = ({ direction, lng }: HeaderRoutesProps) => {
  const activePathname = usePathname();
  const { t } = useTranslation(lng, "routes");

  return (
    <Box component={"nav"}>
      <List direction={direction}>
        {navigation.map(({ title, i18nKey, href }, index) => {
          if (title === Routes.Catalog.title) {
            return (
              <CategoriesMenu key={index} />
            );
          }

          return (
            <ListItem key={index}>
              <Link selected={activePathname === href} href={href} noWrap showUnderline>
                <Trans i18nKey={i18nKey} t={t} />
              </Link>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default LinkNavigation;
