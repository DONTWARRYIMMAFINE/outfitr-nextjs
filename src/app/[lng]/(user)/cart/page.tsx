import { News } from "@/components/common";
import Cart from "@/components/common/Cart";
import { ContentContainer } from "@/components/ui";
import { LngParamsProps } from "@/lib/types/params.type";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Outfitr | Cart",
};

interface CartPageProps extends LngParamsProps {}

const CartPage: FC<CartPageProps> = ({ params }) => {
  const { lng } = params;

  return (<>
      <ContentContainer pageTitle={"Cart"} disableBottomPadding>
        <Cart />
      </ContentContainer>
      {/* @ts-expect-error Server Component */}
      <News lng={lng} />
    </>
  );
};

export default CartPage;
