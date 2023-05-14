"use client";

import { Box, Tab, TabPanel, Tabs, Text } from "@/components/ui";
import { tabs } from "@/constants/routes";
import { indexOf, join } from "lodash";
import { notFound, useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import SettingsTab from "./SettingsTab";

function allyProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export interface ProfileTabs extends WithTranslation {
  tab: string;
}

const ProfileTabs = ({ tab, t }: ProfileTabs) => {
  const value = indexOf(tabs, tab);

  // Throw 404 error
  if (value === -1) {
    notFound();
    return null;
  }

  const router = useRouter();

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    router.push("/" + join(["profile", tabs[newValue]], "/"), {});
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
