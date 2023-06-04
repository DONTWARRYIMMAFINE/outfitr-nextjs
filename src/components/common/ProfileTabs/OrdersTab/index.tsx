"use client";

import Order from "@/components/common/Order";
import { Error, TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { useOrdersQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { WithTranslation, withTranslation } from "react-i18next";

interface OrdersTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const OrdersTab = ({ t, tReady, ...props }: OrdersTabProps) => {
  const { data, loading, error } = useOrdersQuery();

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("page.profile.tabs.orders.title")}
      </Text>
      {data.orders.nodes.map((order, index) => (
        <Order key={order.id} order={order} expandByDefault={index === 0} />
      ))}
    </TabPanel>
  );
};

export default withTranslation()(OrdersTab);
