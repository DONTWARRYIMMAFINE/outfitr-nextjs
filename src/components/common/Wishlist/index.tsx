"use client";

import ProductItem from "@/components/common/Catalog/ProductItem";
import { Text, Box, Button } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { userWishlist } from "@/store/user.store";
import { useReactiveVar } from "@apollo/client";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";
import { Trans } from "react-i18next/TransWithoutContext";

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
        <Text variant={"h2"} textAlign={"center"} lineHeight={1.5}>
          <Trans i18nKey={"content.list.empty"} t={t} components={{ br: <br /> }} />
        </Text>
      }
    </Box>
  );
};

export default withTranslation(I18NS.Wishlist)(Wishlist);
