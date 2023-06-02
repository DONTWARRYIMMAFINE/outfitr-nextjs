"use client";

import OrderInfo from "@/components/common/Cart/Checkout/CompleteOrderStep/OrderInfo";
import { Box, Error } from "@/components/ui";
import { useOrdersQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

interface OrderInfoListProps {}

const OrderInfoList: FC<OrderInfoListProps> = () => {
  const searchParams = useSearchParams();
  const orderIds = searchParams.get("orders")?.split(",") || [];

  console.log("orderIds", orderIds);

  const { data, loading, error } = useOrdersQuery({
    variables: {
      filter: {
        id: {
          in: orderIds,
        },
      },
    },
  });

  if (error) return <Error message={error.message} />;
  if (loading || !data) return <Skeleton variant={"rectangular"} height={180} />;

  return (
    <Box display={"flex"} flexDirection={"column"}>
      {data.orders.nodes.map(order => (
        <OrderInfo key={order.id} order={order} />
      ))}
    </Box>
  );
};

export default OrderInfoList;
