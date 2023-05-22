"use client";

import { IconButton, Icons } from "@/components/ui";
import { loggedInUser } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { useRouter } from "next-intl/client";
import { FC } from "react";

interface AddToWishlistProps {}

const AddToWishlist: FC<AddToWishlistProps> = ({}) => {
  const router = useRouter();
  const user = useReactiveVar(loggedInUser);

  const onClick = () => {
    if (user) {
      // TODO: add to wishlist / remove from wishlist
    }

    router.push("/log-in");
  };

  return (
    <IconButton onClick={() => onClick}>
      <Icons.Like />
    </IconButton>
  );
};

export default AddToWishlist;
