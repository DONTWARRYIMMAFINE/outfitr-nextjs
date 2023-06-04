import Price from "@/components/common/Price";
import { Box, Text } from "@/components/ui";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import moment from "moment/moment";
import { FC } from "react";

interface OrderHeaderProps {
  order: OrderFragment;
}

const OrderHeader: FC<OrderHeaderProps> = ({ order }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
      <Box display={"flex"} flexDirection={"column"}>
        <Text variant={"h3"}>Order number</Text>
        <Text variant={"p"} opacity={0.7}>{order.id}</Text>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
        <Price fontSize={24} amount={order.totalPrice.amount} currency={order.totalPrice.currency} />
        <Text variant={"p"} opacity={0.7}>{moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</Text>
      </Box>
    </Box>
  );
};

export default OrderHeader;
