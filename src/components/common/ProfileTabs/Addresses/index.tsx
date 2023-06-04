"use client";

import UserAddressList from "@/components/common/ProfileTabs/Addresses/UserAddressList";
import { TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { WithTranslation, withTranslation } from "react-i18next";

interface AddressesTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const AddressesTab = ({ t, tReady, ...props }: AddressesTabProps) => {
  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("page.profile.tabs.addresses.title")}
      </Text>
      <UserAddressList />
    </TabPanel>
  );
};

export default withTranslation()(AddressesTab);
