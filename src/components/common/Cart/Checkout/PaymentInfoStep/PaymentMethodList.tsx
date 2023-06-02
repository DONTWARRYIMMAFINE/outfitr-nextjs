"use client";

import CardPaymentMethodItem from "@/components/common/Cart/Checkout/PaymentInfoStep/methods/CardPaymentMethodItem";
import CashPaymentMethodItem from "@/components/common/Cart/Checkout/PaymentInfoStep/methods/CashPaymentMethodItem";
import PaymentMethodItem from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodItem";
import { Box } from "@/components/ui";
import Error from "@/components/ui/Error";
import { PaymentMethods, usePaymentMethodsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";

interface PaymentMethodListProps {}

const PaymentMethodList: FC<PaymentMethodListProps> = () => {
  const { data, loading, error } = usePaymentMethodsQuery();

  if (error) return <Error />;
  if (loading || !data) return <Skeleton />;

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {data.paymentMethods.nodes.map(paymentMethod => {
        switch (paymentMethod.code) {
          case PaymentMethods.Cash:
            return <CashPaymentMethodItem key={paymentMethod.id} paymentMethod={paymentMethod} />;
          case PaymentMethods.Card:
            return <CardPaymentMethodItem key={paymentMethod.id} paymentMethod={paymentMethod} />;
          default:
            return <PaymentMethodItem key={paymentMethod.id} paymentMethod={paymentMethod} />;
        }
      })}
    </Box>
  );
};

export default PaymentMethodList;
