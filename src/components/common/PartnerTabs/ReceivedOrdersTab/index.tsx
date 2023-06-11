import ReceivedOrdersList from "@/components/common/PartnerTabs/ReceivedOrdersTab/ReceivedOrderList";
import { TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { I18NS } from "@/constants/I18NS";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ReceivedOrdersTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const ReceivedOrdersTab: FC<ReceivedOrdersTabProps> = ({ t, tReady, ...props }) => {
  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.receivedOrders.title")}
      </Text>
      <ReceivedOrdersList />
    </TabPanel>
  );
};

export default withTranslation(I18NS.Partner)(ReceivedOrdersTab);
