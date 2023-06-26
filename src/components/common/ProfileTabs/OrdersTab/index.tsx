"use client";

import { Order } from "@/components/common";
import { Error, TabPanel, Text } from "@/components/ui";
import { TabPanelProps } from "@/components/ui/TabPanel";
import { I18NS } from "@/constants/I18NS";
import { useOrdersQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface OrdersTabProps extends Omit<TabPanelProps, "children">, WithTranslation {}

const OrdersTab: FC<OrdersTabProps> = ({ t, tReady, ...props }) => {
  const user = useReactiveVar(loggedInUser);
  const { data, loading, error } = useOrdersQuery({
    variables: {
      filter: {
        userId: {
          eq: user?.id,
        },
      },
    },
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <TabPanel {...props}>
      <Text variant={"h4"} opacity={0.7} paragraph>
        {t("tabs.orders.title")}
      </Text>
      {data.orders.nodes.length === 0
        ? <Text variant={"p"}>{t("tabs.orders.empty")}</Text>
        : <>
          {data.orders.nodes.map((order, index) => (
            <Order key={order.id} order={order} expandByDefault={index === 0} />
          ))}
        </>
      }
    </TabPanel>
  );
};

export default withTranslation(I18NS.Profile)(OrdersTab);
