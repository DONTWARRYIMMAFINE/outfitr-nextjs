"use client";

import { Box, Button } from "@/components/ui";
import { SELF_URL } from "@/constants/urls";
import { TextField } from "@mui/material";
import { CardExpiryElement, CardNumberElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Formik } from "formik";
import { FC, useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CreditCardFormProps extends WithTranslation {}

const CreditCardForm: FC<CreditCardFormProps> = ({t}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();

  const onSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      // `Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${SELF_URL}/order/123/complete`,
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <Box component={"form"} display={"flex"} flexDirection={"column"} gap={2}>
      <PaymentElement options={{ fields: { billingDetails: "never" } }} />
      <Button variant={"primary"} fullWidth onSubmit={onSubmit}>{t("component.button.pay")}</Button>
    </Box>
  );
};

export default withTranslation()(CreditCardForm);
