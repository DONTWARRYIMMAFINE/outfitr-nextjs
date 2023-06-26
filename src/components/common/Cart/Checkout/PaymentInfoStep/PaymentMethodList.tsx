"use client";

import { Box, Error } from "@/components/ui";
import { PaymentMethods, usePaymentMethodsQuery } from "@/lib/graphql/schema.generated";
import { Skeleton } from "@mui/material";
import { FC } from "react";
import CardPaymentMethodItem from "./methods/CardPaymentMethodItem";
import CashPaymentMethodItem from "./methods/CashPaymentMethodItem";
import PaymentMethodItem from "./PaymentMethodItem";

interface PaymentMethodListProps {}

const PaymentMethodList: FC<PaymentMethodListProps> = () => {
  const { data, loading, error } = usePaymentMethodsQuery();

  if (error) return <Error message={error.message} />;
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
