"use client";

import { Box, Link, List, ListItem, Menu } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { useCategoryTreeQuery } from "@/lib/graphql/schema.generated";
import { useTranslation } from "@/lib/i18n/client";
import { LngProps } from "@/lib/types/params.type";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import { Trans } from "react-i18next/TransWithoutContext";

interface CategoriesMenuProps extends LngProps {}

const CategoriesMenu = ({ lng }: CategoriesMenuProps) => {
  const { t } = useTranslation(lng, I18NS.NAVIGATION);
  const { data, loading, error } = useCategoryTreeQuery();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>
    <ListItem>
      <Link onClick={handleClick} selected={open} showUnderline>
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
      sx={{ paddingY: 2 }}
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
              src={"/pattern.png"}
              alt={""}
              style={{ objectFit: "contain" }}
              fill
            />
          </Box>
        </Box>}
    </Menu>
  </>);
};

export default CategoriesMenu;
