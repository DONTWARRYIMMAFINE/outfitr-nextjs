"use client";

import { TabPanel, TabPanelProps, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { WithTranslation, withTranslation } from "react-i18next";
import UserAddressList from "./UserAddressList";

interface AddressesTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const AddressesTab = ({ t, tReady, ...props }: AddressesTabProps) => {
  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.addresses.title")}
      </Text>
      <UserAddressList />
    </TabPanel>
  );
};

export default withTranslation(I18NS.Profile)(AddressesTab);
