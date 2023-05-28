"use client";

import PaymentMethodItem, { PaymentMethodItemProps } from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodItem";
import CreditCardForm from "@/components/common/forms/CreditCardForm";
import Error from "@/components/ui/Error";
import { STRIPE_PUBLIC_KEY } from "@/constants/urls";
import { useCreateOnePaymentIntentFromCartMutation } from "@/lib/graphql/schema.generated";
import { Skeleton, useTheme } from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { useTheme as useNextTheme } from "next-themes";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

export interface CardPaymentMethodItemProps extends PaymentMethodItemProps, WithTranslation {}

const CardPaymentMethodItem: FC<CardPaymentMethodItemProps> = ({ paymentMethod, t, i18n }) => {
  const nextTheme = useNextTheme();
  const theme = useTheme();
  const stripePromise = loadStripe(STRIPE_PUBLIC_KEY, { locale: i18n.language as any });

  const [clientSecret, setClientSecret] = useState<string>();
  const [createOnePaymentIntentFromCartMutation, { error }] = useCreateOnePaymentIntentFromCartMutation();

  const onExpendClick = async () => {
    if (!clientSecret || error) (
      await createOnePaymentIntentFromCartMutation({
        onCompleted: data => setClientSecret(data.createOnePaymentIntentFromCart.clientSecret),
        onError: _ => toast.error("Unable to load card payment info"),
      })
    );
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      variables: {
        colorPrimary: theme.palette.primary.main,
        colorText: theme.palette.text.primary,
        colorBackground: theme.palette.background.textField,
        colorDanger: theme.palette.error.light,
        borderRadius: `${theme.shape.borderRadius * 0.5}px`,
      },
      theme: nextTheme.resolvedTheme === "light" ? "stripe" : "night"
    }
  }

  return (
    <PaymentMethodItem paymentMethod={paymentMethod} onExpendClick={onExpendClick}>
      {clientSecret ?
        <Elements
          stripe={stripePromise}
          options={options}
        >
          <CreditCardForm />
        </Elements> :
        error ? <Error message={error.message} /> : <Skeleton variant={"rectangular"} height={120} />
      }
    </PaymentMethodItem>
  );
};

export default withTranslation()(CardPaymentMethodItem);
