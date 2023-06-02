import OrderItem from "@/components/common/Cart/Checkout/CompleteOrderStep/OrderItem";
import StatusStepper from "@/components/common/Cart/Checkout/CompleteOrderStep/StatusStepper";
import Price from "@/components/common/Price";
import { Box, Text } from "@/components/ui";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";

interface OrderInfoProps {
  order: OrderFragment;
}

const OrderInfo: FC<OrderInfoProps> = ({ order }) => {

  return (
    <Box display={"flex"}>
      <Box display={"flex"} flexDirection={"column"}>
        <Text variant={"h3"}>{order.id}</Text>
        {order.orderItems.map(orderItem => (
          <OrderItem key={orderItem.id} orderItem={orderItem} />
        ))}
        <Text variant={"p"}>Total Price</Text>
        <Price amount={order.totalPrice.amount} currency={order.totalPrice.currency} />
      </Box>
      <StatusStepper orderHistories={order.orderHistories} />
    </Box>
  );
};

export default OrderInfo;
