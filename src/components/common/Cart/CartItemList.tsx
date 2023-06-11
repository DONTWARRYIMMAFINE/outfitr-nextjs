"use client";

import CartItem from "@/components/common/Cart/CartItem";
import { Box, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useAddCartItemsToCartMutation, useRemoveCartItemsFromCartMutation } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";
import { Trans } from "react-i18next/TransWithoutContext";

interface CartItemListProps extends WithTranslation {}

const CartItemList: FC<CartItemListProps> = ({ t }) => {
  const cart = useReactiveVar(userCart);

  const [addCartItemsToCartMutation] = useAddCartItemsToCartMutation();
  const [removeCartItemsFromCartMutation] = useRemoveCartItemsFromCartMutation();

  const onAddClick = async (productVariantId: string) => {
    await addCartItemsToCartMutation({
      variables: {
        input: {
          id: cart?.id!,
          update: {
            cartItems: [
              {
                productVariantId,
                quantity: 1,
              },
            ],
          },
        },
      },
      onCompleted: data => {
        userCart(data.addCartItemsToCart);
        toast.success(t("content.button.add.success"));
      },
      onError: error => toast.error(t("content.button.add.error", { message: error.message })),
    });
  };

  const onRemoveClick = async (productVariantId: string) => {
    if (!cart) {
      return;
    }

    await removeCartItemsFromCartMutation({
      variables: {
        input: {
          id: cart?.id!,
          update: {
            cartItems: [
              {
                productVariantId,
                quantity: 1,
              },
            ],
          },
        },
      },
      onCompleted: data => {
        userCart(data.removeCartItemsFromCart);
        toast.success(t("content.button.remove.success"));
      },
      onError: error => toast.error(t("content.button.remove.error", { message: error.message })),
    });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100%"}
      borderRadius={0.5}
      overflow={"hidden"}
      bgcolor={"background.body"}
      padding={3}
      gap={3}
    >
      {cart?.cartItems.length === 0 && (
        <Box
          display={"flex"}
          flexGrow={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text variant={"h2"} textAlign={"center"} lineHeight={1.5}>
            <Trans i18nKey={"content.list.empty"} t={t} components={{ br: <br /> }} />
          </Text>
        </Box>
      )}
      {cart?.cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} onAddClick={onAddClick} onRemoveClick={onRemoveClick} />
      ))}
    </Box>
  );
};

export default withTranslation(I18NS.Cart)(CartItemList);
