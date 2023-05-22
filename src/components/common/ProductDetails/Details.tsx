"use client";

import AddToCart from "@/components/common/AddToCart";
import AddToWishlist from "@/components/common/AddToWishlist";
import CheckboxGroup from "@/components/common/CheckboxGroup";
import ColorCheckboxGroup from "@/components/common/ColorCheckboxGroup";
import Price from "@/components/common/Price";
import { Box, Icons, Text } from "@/components/ui";
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
  }, [color, size]);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2} paddingX={4}>
      <Text variant={"h1"} component={"h2"}>{product.title}</Text>
      <Text variant={"small"} opacity={0.5}>{product.productVariants[variant].sku}</Text>
      <Price fontSize={32} amount={product.productVariants[variant].price.amount} />
      <Text variant={"p"}>{t("page.product.content.description")}</Text>
      <Text variant={"p"} opacity={0.7} paragraph>{product.description}</Text>
      <Text variant={"p"}>{t("page.product.content.colors")}</Text>
      <ColorCheckboxGroup
        options={product.colors}
        selectedValues={[color]}
        onClick={setColor}
      />
      <Text variant={"p"}>{t("page.product.content.sizes")}</Text>
      <CheckboxGroup
        options={product.sizes}
        selectedValues={[size]}
        onClick={setSize}
      />
      <Box display={"flex"} gap={2} marginTop={2}>
        <Icons.Stock />
        <Text variant={"p"} opacity={0.7} paragraph>
          {t("page.product.content.stock")}: {product.productVariants[variant].stock}</Text>
      </Box>
      <Box display={"flex"} gap={2}>
        <AddToCart productVariantId={product.productVariants[variant].id} disabled={product.productVariants[variant].stock === 0}/>
        <AddToWishlist />
      </Box>
    </Box>
  );
};

export default withTranslation()(Details);
