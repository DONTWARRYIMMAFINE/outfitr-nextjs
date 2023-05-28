"use client";

import { Button, Icons } from "@/components/ui";
import { ButtonProps } from "@/components/ui/Button";
import { useAddCartItemsToCartMutation } from "@/lib/graphql/schema.generated";
import { userCart } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next-intl/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

export interface AddToCartButtonProps extends ButtonProps, WithTranslation {
  productVariantId: string;
  disabled?: boolean;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ productVariantId, disabled, t, tReady, i18n, ...props }) => {
  const router = useRouter();
  const cart = useReactiveVar(userCart);

  const [addCartItemsToCartMutation] = useAddCartItemsToCartMutation();

  const onClick = async () => {
    if (cart) {
      await addCartItemsToCartMutation({
        variables: {
          input: {
            id: cart.id,
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
    } else {
      router.push("/log-in");
    }
  };

  return (
    <Button
      variant={"primary"}
      endIcon={<Icons.Cart />}
      disabled={disabled}
      onClick={() => onClick()}
      {...props}
    >
      {t("component.button.addToCart")}
    </Button>
  );
};

export default withTranslation()(AddToCartButton);
