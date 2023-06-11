"use client";

import Order from "@/components/common/Order";
import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { OrderFragment, useBrandsQuery, useOrdersLazyQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { map } from "lodash";
import { FC, useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ReceivedOrderListProps extends WithTranslation {}

const ReceivedOrderList: FC<ReceivedOrderListProps> = ({ t }) => {
  const user = useReactiveVar(loggedInUser);
  const [orders, setOrders] = useState<OrderFragment[]>([]);
  const [ordersLazyQuery] = useOrdersLazyQuery();
  const { data: brandsData, loading, error } = useBrandsQuery({
    onCompleted: async ({ brands }) => {
      await ordersLazyQuery({
        onCompleted: ({ orders }) => {
          setOrders(orders.nodes);
        },
        variables: {
          filter: {
            orderItems: {
              productVariant: {
                product: {
                  brandId: {
                    in: map(brands.nodes, "id"),
                  },
                },
              },
            },
          },
        },
      });
    },
    variables: {
      filter: {
        userId: {
          eq: user?.id,
        },
      },
    },
  });

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      {!orders || orders.length === 0 ?
        <Text variant={"small"}>{t("tabs.receivedOrders.empty")}</Text> : <>
          {orders.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </>
      }
    </Box>
  );
};

export default withTranslation(I18NS.Partner)(ReceivedOrderList);
