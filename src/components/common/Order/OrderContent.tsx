"use client";

import ChangeOrderStatus from "@/components/common/Order/ChangeOrderStatus";
import OrderInfo from "@/components/common/Order/OrderInfo";
import { Box, Divider, Grid, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import { usePathname } from "next-intl/client";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import OrderItem from "./OrderItem";
import OrderStatusStepper from "./OrderStatusStepper";

interface OrderContentProps extends WithTranslation {
  order: OrderFragment;
}

const OrderContent: FC<OrderContentProps> = ({ order, t }) => {
  const pathname = usePathname();

  return (
    <Grid display={"flex"} justifyContent={"center"} container spacing={8} mb={3}>
      <Grid container item xs={7} spacing={4}>
        <Grid item xs={12} hidden={pathname === Routes.Checkout.href}>
          <ChangeOrderStatus order={order} />
        </Grid>
        <Grid item xs={12}>
          <Text variant={"p"} opacity={0.7} paragraph>{t("content.items.label")}</Text>
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            {order.orderItems.map(orderItem => (
              <OrderItem key={orderItem.id} orderItem={orderItem} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} mb={3}>
          <OrderInfo order={order} />
        </Grid>
      </Grid>
      <Grid item>
        <Divider variant={"fullWidth"} orientation={"vertical"} />
      </Grid>
      <Grid item>
        <OrderStatusStepper orderHistories={order.orderHistories} />
      </Grid>
    </Grid>
  );
};

export default withTranslation(I18NS.Order)(OrderContent);
