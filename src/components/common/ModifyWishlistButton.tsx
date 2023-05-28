"use client";

import { IconButton, Icons } from "@/components/ui";
import { useAddProductsToWishlistMutation, useRemoveProductsFromWishlistMutation } from "@/lib/graphql/schema.generated";
import { userWishlist } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { IconButtonProps } from "@mui/material";
import { useRouter } from "next-intl/client";
import { FC } from "react";
import toast from "react-hot-toast";

interface ModifyWishlistProps extends IconButtonProps {
  productId: string;
}

const ModifyWishlistButton: FC<ModifyWishlistProps> = ({ productId, ...props }) => {
  const router = useRouter();
  const wishlist = useReactiveVar(userWishlist);
  const [addProductsToWishlistMutation] = useAddProductsToWishlistMutation();
  const [removeProductsFromWishlistMutation] = useRemoveProductsFromWishlistMutation();

  const inWishlist =
    wishlist ?
      wishlist.products
        .map(product => product.id)
        .includes(productId) :
      false;

  console.log("inWishlist", inWishlist);

  const onClick = async () => {
    console.log("called 2");
    if (wishlist) {
      if (inWishlist) {
        await removeProductsFromWishlistMutation({
          onCompleted: data => userWishlist(data.removeProductsFromWishlist),
          onError: _ => toast.error("Unable to remove product from wishlist"),
          variables: {
            input: {
              id: wishlist.id,
              update: {
                products: [
                  {
                    id: productId,
                  },
                ],
              },
            },
          },
        });
      } else {
        console.log("called");
        await addProductsToWishlistMutation({
          onCompleted: data => userWishlist(data.addProductsToWishlist),
          onError: _ => toast.error("Unable to add product to wishlist"),
          variables: {
            input: {
              id: wishlist.id,
              update: {
                products: [
                  {
                    id: productId,
                  },
                ],
              },
            },
          },
        });
      }
    } else {
      router.push("/log-in");
    }
  };

  return (
    <IconButton sx={{ mt: "auto", mb: "auto" }} onClick={onClick} {...props}>
      {inWishlist ? <Icons.Unlike /> : <Icons.Like />}
    </IconButton>
  );
};

export default ModifyWishlistButton;
