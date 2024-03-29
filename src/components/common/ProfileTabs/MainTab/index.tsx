"use client";

import { ContactInfoForm } from "@/components/common/forms";
import { Box, TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { I18NS } from "@/constants/I18NS";
import { WithTranslation, withTranslation } from "react-i18next";
import AvatarUpdate from "./AvatarUpdate";

interface MainTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const MainTab = ({ t, tReady, ...props }: MainTabProps) => {
  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.main.title")}
      </Text>
      <Box display={"flex"} flexDirection={"column"} gap={8}>
        <AvatarUpdate />
        <ContactInfoForm />
      </Box>
    </TabPanel>
  );
};

export default withTranslation(I18NS.Profile)(MainTab);
