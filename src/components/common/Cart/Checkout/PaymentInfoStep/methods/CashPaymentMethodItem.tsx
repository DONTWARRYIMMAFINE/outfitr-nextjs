"use client";

import PaymentMethodItem, { PaymentMethodItemProps } from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodItem";
import { Button } from "@/components/ui";
import { MyCartDocument, usePlaceOrderFromUserCartMutation } from "@/lib/graphql/schema.generated";
import { map } from "lodash";
import { usePathname, useRouter } from "next-intl/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { withTranslation, WithTranslation } from "react-i18next";

export interface CashPaymentMethodItemProps extends PaymentMethodItemProps, WithTranslation {}

const CashPaymentMethodItem: FC<CashPaymentMethodItemProps> = ({ paymentMethod, t }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [placeOrderFromUserCartMutation, { client }] = usePlaceOrderFromUserCartMutation();

  const onClick = async () => {
    await placeOrderFromUserCartMutation({
      onCompleted: ({ placeOrderFromUserCart: orders }) => {
        const params = new URLSearchParams();
        const ordersQuery = map(orders, "id").join(",");

        params.set("step", "completeOrder");
        params.set("orders", ordersQuery);
        router.replace(`${pathname}?${params.toString()}`);

        toast.success("Order created successfully");
      },
      onError: error => {
        // Refetch cart on error too, because error can happen because of stock changes and not available item removed from cart
        client.refetchQueries({ include: [MyCartDocument] });
        toast.error(error.message);
      },
      refetchQueries: _ => [MyCartDocument],
    });
  };

  return (
    <PaymentMethodItem paymentMethod={paymentMethod}>
      <Button variant={"primary"} onClick={onClick}>{t("component.button.placeOrder")}</Button>
    </PaymentMethodItem>
  );
};

export default withTranslation()(CashPaymentMethodItem);
