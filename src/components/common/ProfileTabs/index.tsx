"use client";

import AddressesTab from "@/components/common/ProfileTabs/Addresses";
import MainTab from "@/components/common/ProfileTabs/Main";
import OrdersTab from "@/components/common/ProfileTabs/OrdersTab";
import { Box, Tab, Tabs } from "@/components/ui";
import { profileTabs } from "@/constants/routes";
import { indexOf } from "lodash";
import { usePathname, useRouter } from "next-intl/client";
import { notFound, useSearchParams } from "next/navigation";
import { SyntheticEvent } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import SettingsTab from "./SettingsTab";

function allyProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export interface ProfileTabs extends WithTranslation {}

const ProfileTabs = ({ t }: ProfileTabs) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const value = indexOf(profileTabs, searchParams.get("tab") || "");

  // Throw 404 error
  if (value === -1) {
    notFound();
    return null;
  }

  const handleChange = async (event: SyntheticEvent, newValue: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", profileTabs[newValue]);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Box display={"flex"} flexGrow={1}>
      <Tabs
        orientation={"vertical"}
        variant={"scrollable"}
        value={value}
        onChange={handleChange}
        aria-label={"Profile vertical tabs"}
        sx={{ alignItems: "start", borderRight: 1, borderColor: "divider" }}
      >
        <Tab label={t("tabs.main.label")} {...allyProps(0)} />
        <Tab label={t("tabs.orders.label")} {...allyProps(1)} />
        <Tab label={t("tabs.addresses.label")} {...allyProps(2)} />
        <Tab label={t("tabs.settings.label")} {...allyProps(3)} />
      </Tabs>
      <Box display={"flex"} flexDirection={"column"} width={"90%"}>
        <MainTab value={value} index={0} />
        <OrdersTab value={value} index={1} />
        <AddressesTab value={value} index={2} />
        <SettingsTab value={value} index={3} />
      </Box>
    </Box>
  );
};

export default withTranslation("profile")(ProfileTabs);
