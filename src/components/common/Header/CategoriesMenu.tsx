"use client";

import { Box, Link, List, ListItem, Menu, Image } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { useCategoryTreeQuery } from "@/lib/graphql/schema.generated";
import { usePathname } from "next-intl/client";
import { MouseEvent, useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { Trans } from "react-i18next/TransWithoutContext";

export interface CategoriesMenuProps extends WithTranslation {}

const CategoriesMenu = ({ t }: CategoriesMenuProps) => {
  const pathname = usePathname();
  const { data, loading, error } = useCategoryTreeQuery();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selected = [Routes.Catalog.href, Routes.ProductDetails.href].includes("/" + pathname.split("/")[1]);

  return (<>
    <ListItem>
      <Link onClick={handleClick} selected={selected} showUnderline>
        <Trans i18nKey={Routes.Catalog.i18nKey} t={t} />
      </Link>
    </ListItem>
    <Menu
      id={"account-menu"}
      anchorEl={anchorEl}
      open={open}
      onClick={handleClose}
      onClose={handleClose}
      transformOrigin={{ horizontal: "center", vertical: "top" }}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
    >
      {!loading && !error &&
        <Box display={"flex"} gap={4} justifyContent={"space-between"}>
          {data?.categoryTree[0].children?.map(({ id, code, name, description, parentId, children }) => (
            <List key={id} direction={"column"}>
              <ListItem key={id}>
                <Link variant={"h1"} href={Routes.Catalog.href + "/" + code}>
                  {name}
                </Link>
              </ListItem>
              {children?.map(({ id, code: childCode, name, description, parentId }) => (
                <ListItem key={id}>
                  <Link variant={"button"} href={Routes.Catalog.href + "/" + code + "/" + childCode}>
                    {name}
                  </Link>
                </ListItem>
              ))}
            </List>
          ))}
          <Box
            position={"relative"}
            width={"500px"}
            minHeight={"100%"}
          >
            <Image
              priority
              src={"/assets/category.png"}
              alt={"Ops..."}
              style={{ objectFit: "contain" }}
              fill
            />
          </Box>
        </Box>}
    </Menu>
  </>);
};

export default withTranslation(I18NS.Route)(CategoriesMenu);
