"use client";

import Order from "@/components/common/Order";
import { Box, Text, Error } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useBrandsQuery, useOrdersQuery } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface ReceivedOrderListProps extends WithTranslation {}

const ReceivedOrderList: FC<ReceivedOrderListProps> = ({ t }) => {
  const user = useReactiveVar(loggedInUser);

  const { data, loading, error } = useOrdersQuery({
    variables: {
      filter: {
        orderItems: {
          productVariant: {
            product: {
              brand: {
                userId: {
                  eq: user?.id
                }
              }
            }
          }
        }
      }
    }
  });

  if (error) return <Error message={error.message} />
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />

  return (
    <Box display={"flex"} flexDirection={"column"} gap={4}>
      {data.orders.nodes.length === 0 ?
        <Text variant={"p"}>{t("tabs.receivedOrders.empty")}</Text> : <>
          {data.orders.nodes.map(order => (
            <Order key={order.id} order={order} />
          ))}
        </>
      }
    </Box>
  );
};

export default withTranslation(I18NS.Partner)(ReceivedOrderList);
