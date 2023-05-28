import { News } from "@/components/common";
import Cart from "@/components/common/Cart";
import { PageContainer } from "@/components/ui";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Thank you!",
};

interface OrderPageProps extends LngParamsProps {}

const OrderPage: FC<OrderPageProps> = ({ params }) => {
  const { lng } = params;

  return (<>
      {}
    </>
  );
};

export default OrderPage;
