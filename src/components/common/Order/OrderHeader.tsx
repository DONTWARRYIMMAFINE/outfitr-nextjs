"use client";

import Price from "@/components/common/Price";
import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { OrderFragment, OrderStatus } from "@/lib/graphql/schema.generated";
import moment from "moment/moment";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface OrderHeaderProps extends WithTranslation {
  order: OrderFragment;
}

const OrderHeader: FC<OrderHeaderProps> = ({ order, t }) => {
  const color = order.status === OrderStatus.Completed
    ? "primary.main" : order.status === OrderStatus.Rejected || order.status === OrderStatus.Cancelled
      ? "error.light" : "text.primary";

  return (
    <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
      <Box display={"flex"} flexDirection={"column"}>
        <Box display={"flex"} gap={2}>
          <Text variant={"p"} opacity={0.7}>{t("header.order.label")}</Text>
          <Text variant={"p"}>{order.id}</Text>
        </Box>
        <Box display={"flex"} gap={2}>
          <Text variant={"p"} opacity={0.7}>{t("header.status.label")}</Text>
          <Text variant={"p"} color={color}>{order.status}</Text>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
        <Price fontSize={24} amount={order.totalPrice.amount} currency={order.totalPrice.currency} />
        <Text variant={"p"} opacity={0.7}>{moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Text>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Order)(OrderHeader);
