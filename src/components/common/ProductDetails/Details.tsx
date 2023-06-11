"use client";

import AddToCart from "@/components/common/AddToCartButton";
import CheckboxGroup from "@/components/common/CheckboxGroup";
import ColorCheckboxGroup from "@/components/common/ColorCheckboxGroup";
import ModifyWishlistButton from "@/components/common/ModifyWishlistButton";
import Price from "@/components/common/Price";
import CreateCommentCollapsable from "@/components/common/ProductDetails/CreateCommentCollapsable";
import ProductRating from "@/components/common/ProductDetails/ProductRating";
import { Box, Icons, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductFragment } from "@/lib/graphql/schema.generated";
import { FC, useEffect, useState } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

export interface DetailsProps extends WithTranslation {
  product: ProductFragment;
}

const Details: FC<DetailsProps> = ({ product, t }) => {
  const [variant, setVariant] = useState(0);
  const [color, setColor] = useState(product.productVariants[variant].color.code);
  const [size, setSize] = useState(product.productVariants[variant].size.code);

  useEffect(() => {
    const selectedVariant = product.productVariants.findIndex(v =>
      v.color.code === color &&
      v.size.code === size,
    );
    console.log("selectedVariant", selectedVariant);
    setVariant(selectedVariant);
  }, [color, size, product.productVariants]);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} padding={4} bgcolor={"background.body"} borderRadius={0.5}>
      <Text variant={"h1"} component={"h2"}>{product.title}</Text>
      <Text variant={"small"} opacity={0.5}>{product.productVariants[variant].sku}</Text>
      <Price fontSize={32} amount={product.productVariants[variant].price.amount} />
      <Text variant={"p"}>{t("content.description.label")}</Text>
      <Text variant={"p"} opacity={0.7} paragraph>{product.description}</Text>
      <Text variant={"p"}>{t("content.colors.label")}</Text>
      <ColorCheckboxGroup
        options={product.colors}
        selectedValues={[color]}
        onClick={setColor}
      />
      <Text variant={"p"}>{t("content.sizes.label")}</Text>
      <CheckboxGroup
        options={product.sizes}
        selectedValues={[size]}
        onClick={setSize}
      />
      <ProductRating productId={product.id} />
      <Box display={"flex"} gap={2} marginTop={2}>
        <Icons.Stock />
        <Text variant={"p"} opacity={0.7} paragraph>
          {t("content.stock.label")}: {product.productVariants[variant].stock}</Text>
      </Box>
      <Box display={"flex"} gap={2}>
        <AddToCart productVariantId={product.productVariants[variant].id} disabled={product.productVariants[variant].stock === 0} />
        <ModifyWishlistButton productId={product.id} />
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.ProductDetails)(Details);
