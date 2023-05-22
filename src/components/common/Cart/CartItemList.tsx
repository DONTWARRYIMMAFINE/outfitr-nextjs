"use client";

import CartItem from "@/components/common/Cart/CartItem";
import { Box } from "@/components/ui";
import { useAddCartItemsToCartMutation, useRemoveCartItemsFromCartMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import toast from "react-hot-toast";

interface CartItemListProps {}

const CartItemList: FC<CartItemListProps> = ({}) => {
  const user = useReactiveVar(loggedInUser);
  const [addCartItemsToCartMutation] = useAddCartItemsToCartMutation();
  const [removeCartItemsFromCartMutation] = useRemoveCartItemsFromCartMutation();

  const onAddClick = async (productVariantId: string) => {
    if (!user) {
      return;
    }

    await addCartItemsToCartMutation({
      variables: {
        input: {
          id: user.cart.id,
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
        loggedInUser({ ...user, cart: data.addCartItemsToCart });
        toast.success("Added to cart");
      },
      onError: _ => toast.error("Ops...unable to add product to cart"),
    });
  };

  const onRemoveClick = async (productVariantId: string) => {
    if (!user) {
      return;
    }

    await removeCartItemsFromCartMutation({
      variables: {
        input: {
          id: user.cart.id,
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
        loggedInUser({ ...user, cart: data.removeCartItemsFromCart });
        toast.success("Removed from cart");
      },
      onError: _ => toast.error("Ops...unable to remove product from cart"),
    });
  };

  return (
    <Box display={"flex"} flexDirection={"column"} borderRadius={0.5} bgcolor={"background.body"}>
      {user?.cart?.cartItems.map(cartItem => (
        <CartItem key={cartItem.id} cartItem={cartItem} onAddClick={onAddClick} onRemoveClick={onRemoveClick} />
      ))}
    </Box>
  );
};

export default CartItemList;
