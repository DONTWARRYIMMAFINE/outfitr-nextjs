"use client";

import CartTotalsItem from "@/components/common/Cart/CartTotals/CartTotalsItem";
import CartRow from "@/components/common/Cart/CartTotals/CartRow";
import { Box, Divider, Link, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { CartItemFragment } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC, PropsWithChildren, ReactNode } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface CartTotalsProps extends PropsWithChildren, WithTranslation {
  showItems?: boolean;
  NextButton?: ReactNode;
  PreviousButton?: ReactNode;
}

const CartTotals: FC<CartTotalsProps> = ({ showItems, NextButton, PreviousButton, t }) => {
  const cart = useReactiveVar(userCart);

  return (
    <Box display={"flex"} flexDirection={"column"} bgcolor={"background.body"} borderRadius={0.5} padding={4} gap={1}>
      {showItems && (<>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
          <Text variant={"p"}>{t("content.cartTotals.label")}</Text>
          <Link href={Routes.Cart.href} sx={{ opacity: 0.7 }} noWrap>
            {t("content.cartTotals.button.edit.label")}
          </Link>
        </Box>
        <Divider flexItem sx={{ borderStyle: "dashed" }} />
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {cart?.cartItems.map((cartItem: CartItemFragment) => (
            <CartTotalsItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </Box>
        <Divider flexItem sx={{ borderStyle: "dashed" }} />
      </>)}

      <CartRow priceProps={{
        amount: cart?.subtotalPrice.amount!,
        currency: cart?.subtotalPrice.currency!,
        fontSize: 18,
      }}>
        <Text variant={"p"}>{t("content.cartTotals.subtotal.label")}</Text>
      </CartRow>
      <CartRow priceProps={{
        amount: cart?.taxPrice.amount!,
        currency: cart?.taxPrice.currency!,
        fontSize: 18,
      }}>
        <Text variant={"p"}>{t("content.cartTotals.tax.label")} ({Math.floor(cart?.taxPrice.amount! / cart?.subtotalPrice.amount! * 100) || 0}%)</Text>
      </CartRow>
      {cart?.deliveryMethod && (
        <CartRow priceProps={{
          amount: cart?.deliveryMethod?.price.amount!,
          currency: cart?.deliveryMethod?.price.currency!,
          fontSize: 18,
        }}>
          <Text variant={"p"}>{t("content.cartTotals.delivery.label")} ({cart?.deliveryMethod.name})</Text>
        </CartRow>
      )}
      <Divider flexItem sx={{ borderStyle: "dashed" }} />
      <CartRow priceProps={{
        amount: cart?.totalPrice.amount!,
        currency: cart?.totalPrice.currency!,
        fontSize: 18,
      }}>
        <Text variant={"p"}>{t("content.cartTotals.total.label")}</Text>
      </CartRow>
      <Divider flexItem sx={{ borderStyle: "dashed" }} />
      <Box display={"flex"} justifyContent={"space-between"} gap={2}>
        {PreviousButton}
        {NextButton}
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Cart)(CartTotals);
