"use client";

import { Box, Tab, TabPanel, Tabs, Text } from "@/components/ui";
import { tabs } from "@/constants/routes";
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
  const value = indexOf(tabs, searchParams.get("tab") || "");

  // Throw 404 error
  if (value === -1) {
    notFound();
    return null;
  }

  const handleChange = async (event: SyntheticEvent, newValue: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("tab", tabs[newValue]);
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
      <Box display={"flex"} flexGrow={1} flexDirection={"column"}>
        <TabPanel value={value} index={0}>
          <Text>Main</Text>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Text>Orders</Text>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Text>Addresses</Text>
        </TabPanel>
        <SettingsTab value={value} index={3} />
      </Box>
    </Box>
  );
};

export default withTranslation("profile")(ProfileTabs);
