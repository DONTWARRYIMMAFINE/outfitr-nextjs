"use client";

import ProductItem from "@/components/common/Catalog/ProductItem";
import { Text, Box, Button } from "@/components/ui";
import { userWishlist } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface WishlistProps extends WithTranslation {}

const Wishlist: FC<WishlistProps> = ({t}) => {
  const wishlist = useReactiveVar(userWishlist);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      minHeight={"100%"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {wishlist?.products?.length !== 0 ?
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        width={"100%"}
        gap={3}
      >
        {wishlist?.products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box> :
        <Text variant={"h2"} textAlign={"center"}>{t("component.label.emptyWishlist")}</Text>
      }
    </Box>
  );
};

export default withTranslation()(Wishlist);
