"use client";

import CartItem from "@/components/common/Cart/CartItem";
import { Box, Text } from "@/components/ui";
import { useAddCartItemsToCartMutation, useRemoveCartItemsFromCartMutation } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";

interface CartItemListProps {}

const CartItemList: FC<CartItemListProps> = ({}) => {
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
        toast.success("Added to cart");
      },
      onError: _ => toast.error("Ops...unable to add product to cart"),
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
        toast.success("Removed from cart");
      },
      onError: _ => toast.error("Ops...unable to remove product from cart"),
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
          <Text variant={"h1"} textAlign={"center"}>
            Your cart is empty. <br />Explore catalog first
          </Text>
        </Box>
      )}
      {cart?.cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} onAddClick={onAddClick} onRemoveClick={onRemoveClick} />
      ))}
    </Box>
  );
};

export default CartItemList;
