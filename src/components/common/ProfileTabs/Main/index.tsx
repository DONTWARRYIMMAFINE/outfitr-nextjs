"use client";

import ContactInfoForm from "@/components/common/forms/ContactInfoForm";
import AvatarUpdate from "@/components/common/ProfileTabs/Main/AvatarUpdate";
import { Box, TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { WithTranslation, withTranslation } from "react-i18next";

interface MainTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const MainTab = ({ t, tReady, ...props }: MainTabProps) => {
  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("page.profile.tabs.main.title")}
      </Text>
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        <AvatarUpdate />
        <ContactInfoForm />
      </Box>
    </TabPanel>
  );
};

export default withTranslation()(MainTab);
