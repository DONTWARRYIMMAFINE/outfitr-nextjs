"use client";

import { Button, Icons } from "@/components/ui";
import { useAddCartItemsToCartMutation } from "@/lib/graphql/schema.generated";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next-intl/client";
import { FC } from "react";
import toast from "react-hot-toast";
import { WithTranslation, withTranslation } from "react-i18next";

export interface AddToCartProps extends WithTranslation {
  productVariantId: string;
  disabled?: boolean;
}

const AddToCart: FC<AddToCartProps> = ({ productVariantId, disabled, t }) => {
  const router = useRouter();
  const user = useReactiveVar(loggedInUser);

  const [addCartItemsToCartMutation] = useAddCartItemsToCartMutation();

  const onClick = async () => {
    if (user) {
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
    >
      {t("component.button.addToCart")}
    </Button>
  );
};

export default withTranslation()(AddToCart);
