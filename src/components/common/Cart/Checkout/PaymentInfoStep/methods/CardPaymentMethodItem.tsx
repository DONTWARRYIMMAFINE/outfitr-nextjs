"use client";

import PaymentMethodItem, { PaymentMethodItemProps } from "@/components/common/Cart/Checkout/PaymentInfoStep/PaymentMethodItem";
import CreditCardForm from "@/components/common/forms/CreditCardForm";
import Error from "@/components/ui/Error";
import { I18NS } from "@/constants/I18NS";
import { STRIPE_PUBLIC_KEY } from "@/constants/urls";
import { PaymentIntentFragment, useCancelOnePaymentIntentMutation, useCreateOnePaymentIntentFromCartMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser, userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
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
  const user = useReactiveVar(loggedInUser);
  const cart = useReactiveVar(userCart);

  const [stripePromise, setStripePromise] = useState(() => loadStripe(STRIPE_PUBLIC_KEY, { locale: i18n.language as any }));
  const [paymentIntent, setPaymentIntent] = useState<PaymentIntentFragment>();
  const [createOnePaymentIntentFromCartMutation, { error }] = useCreateOnePaymentIntentFromCartMutation();
  const [cancelOnePaymentIntentMutation] = useCancelOnePaymentIntentMutation();

  const onExpend = async () => {
    if (!paymentIntent || error) (
      await createOnePaymentIntentFromCartMutation({
        onCompleted: ({ createOnePaymentIntentFromCart: paymentIntent }) => setPaymentIntent(paymentIntent),
        onError: _ => toast.error("Unable to load card payment info"),
      })
    );
  };

  const onCollapse = async () => {
    if (paymentIntent) {
      await cancelOnePaymentIntentMutation({
        onCompleted: _ => setPaymentIntent(undefined),
        onError: _ => toast.error("Unable to cancel payment intent"),
        variables: {
          input: {
            id: paymentIntent.id,
          },
        },
      });
    }
  };

  const options: StripeElementsOptions = {
    clientSecret: paymentIntent?.clientSecret,
    appearance: {
      variables: {
        colorPrimary: theme.palette.primary.main,
        colorText: theme.palette.text.primary,
        colorBackground: theme.palette.background.textField,
        colorDanger: theme.palette.error.light,
        borderRadius: `${theme.shape.borderRadius * 0.5}px`,
      },
      theme: nextTheme.resolvedTheme === "light" ? "stripe" : "night",
    },
  };

  return (
    <PaymentMethodItem paymentMethod={paymentMethod} onExpand={onExpend} onCollapse={onCollapse}>
      {paymentIntent ?
        <Elements
          stripe={stripePromise}
          options={options}
        >
          <CreditCardForm
            paymentIntent={paymentIntent}
            billingDetails={{
              address: {
                city: cart?.deliveryAddress?.city.name,
                country: cart?.deliveryAddress?.country.code,
                line1: cart?.deliveryAddress?.street!,
                line2: cart?.deliveryAddress?.building!,
                state: cart?.deliveryAddress?.state!,
                postal_code: cart?.deliveryAddress?.postalCode!,
              },
              email: user?.emailAddress.address,
              name: user?.fullName,
              phone: user?.phone!,
            }}
            i18n={i18n}
          />
        </Elements> :
        error ? <Error message={error.message} /> : <Skeleton variant={"rectangular"} height={180} />
      }
    </PaymentMethodItem>
  );
};

export default withTranslation(I18NS.Checkout)(CardPaymentMethodItem);
