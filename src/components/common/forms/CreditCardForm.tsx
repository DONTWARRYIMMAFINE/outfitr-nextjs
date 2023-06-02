"use client";

import { Button } from "@/components/ui";
import { Routes } from "@/constants/routes";
import { SELF_URL } from "@/constants/urls";
import {
  MyCartDocument,
  PaymentIntentFragment,
  usePlaceOrderFromUserCartMutation,
  useUpdateOneOrderMutation,
} from "@/lib/graphql/schema.generated";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentMethodCreateParams } from "@stripe/stripe-js/types/api/payment-methods";
import { map } from "lodash";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

interface CreditCardFormProps extends WithTranslation {
  paymentIntent: PaymentIntentFragment;
  billingDetails: PaymentMethodCreateParams.BillingDetails;
}

const CreditCardForm: FC<CreditCardFormProps> = ({ paymentIntent, billingDetails, t, i18n }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [placeOrderFromUserCartMutation, { client }] = usePlaceOrderFromUserCartMutation();
  const [updateOneOrderMutation] = useUpdateOneOrderMutation();

  const handleError = (error: any) => {
    setIsLoading(false);
    toast.error(error.message);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      return;
    }

    setIsLoading(true);

    await placeOrderFromUserCartMutation({
      onCompleted: async ({ placeOrderFromUserCart: orders }) => {
        for (const order of orders) {
          await updateOneOrderMutation({
            variables: {
              input: {
                id: order.id,
                update: {
                  paymentIntentId: paymentIntent.id
                }
              }
            }
          })
        }

        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
          handleError(submitError);
          return;
        }

        // Confirm the PaymentIntent using the details collected by the Payment Element
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            payment_method_data: {
              billing_details: billingDetails,
            },
            return_url: `${SELF_URL}/${i18n.language}/${Routes.Checkout.href}?step=completeOrder&orders=${map(orders, "id")}`,
          },
        });

        // This code part executes only if error happened
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
      },
      onError: error => {
        client.refetchQueries({ include: [MyCartDocument] });
        handleError(error);
      },
      refetchQueries: _ => [MyCartDocument],
    });
  };

  return (
    <form id={"payment-form"} onSubmit={handleSubmit}>
      <PaymentElement id={"payment-element"} options={{ fields: { billingDetails: "never" } }} />
      <Button id={"submit"} type={"submit"} variant={"primary"} disabled={isLoading || !stripe || !elements} fullWidth>{t("component.button.pay")}</Button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default withTranslation()(CreditCardForm);
