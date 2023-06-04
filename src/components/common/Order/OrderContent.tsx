import OrderInfo from "@/components/common/Order/OrderInfo";
import { Divider, Grid, Text } from "@/components/ui";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import OrderItem from "./OrderItem";
import OrderStatusStepper from "./OrderStatusStepper";

interface OrderContentProps {
  order: OrderFragment;
}

const OrderContent: FC<OrderContentProps> = ({ order }) => {
  return (
    <Grid display={"flex"} justifyContent={"center"} container spacing={8} mb={3}>
      <Grid item xs={7}>
        <Text variant={"p"} opacity={0.7} paragraph>Order items</Text>
        <Grid item xs={12} mb={3}>
          {order.orderItems.map(orderItem => (
            <OrderItem key={orderItem.id} orderItem={orderItem} />
          ))}
        </Grid>
        <OrderInfo order={order} />
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

export default OrderContent;
