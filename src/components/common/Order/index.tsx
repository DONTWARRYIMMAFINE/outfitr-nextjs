import CollapsableBox, { CollapsableBoxProps } from "@/components/common/CollapsableBox";
import OrderContent from "@/components/common/Order/OrderContent";
import OrderHeader from "@/components/common/Order/OrderHeader";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";

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
