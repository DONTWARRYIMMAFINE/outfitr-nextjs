import { CollapsableBox, CollapsableBoxProps } from "@/components/common";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import OrderContent from "./OrderContent";
import OrderHeader from "./OrderHeader";

interface OrderProps extends Omit<CollapsableBoxProps, "Header"> {
  order: OrderFragment;
}

const Order: FC<OrderProps> = ({ order, expandByDefault = false }) => {
  return (
    <CollapsableBox Header={<OrderHeader order={order} />} expandByDefault={expandByDefault}>
      <OrderContent order={order} />
    </CollapsableBox>
  );
};

export default Order;
