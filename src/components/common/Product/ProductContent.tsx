"use client";

import { Box, Image, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { ProductFragment } from "@/lib/graphql/schema.generated";
import { prepareBlurImage } from "@/lib/utils/image.helper";
import { FC } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import ProductActions from "./ProductActions";
import ProductVariant from "./ProductVariant";

interface ProductContentProps extends WithTranslation {
  product: ProductFragment;
}

const ProductContent: FC<ProductContentProps> = ({ product, t }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <ProductActions product={product} />
      <Text variant={"h4"}>{t("content.title.label")}</Text>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"background.textField"}
        border={0.25}
        borderColor={"background.component"}
        borderRadius={0.25}
        padding={2}
      >
        <Text variant={"h4"}>{product.title}</Text>
      </Box>
      <Text variant={"h4"}>{t("content.description.label")}</Text>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"background.textField"}
        border={0.25}
        borderColor={"background.component"}
        borderRadius={0.25}
        padding={2}
      >
        <Text variant={"h4"}>{product.description}</Text>
      </Box>
      <Text variant={"h4"}>{t("content.images.label")}</Text>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"background.textField"}
        border={0.25}
        borderColor={"background.component"}
        borderRadius={0.25}
        padding={2}
      >
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
          {product.media.map(({ id, url, width, height }) => (
            <Box key={id} position={"relative"} width={120} height={225} borderRadius={0.25} overflow={"hidden"}>
              <Image
                src={url}
                blurDataURL={prepareBlurImage(
                  url,
                  Math.floor(width! / 10),
                  Math.floor(height! / 10),
                )}
                placeholder={url ? "blur" : undefined}
                alt={"Ops..."}
                style={{ objectFit: "cover" }}
                fill
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Text variant={"h4"}>{t("content.variants.label")}</Text>
      {product.productVariants.map(productVariant => (
        <ProductVariant key={productVariant.id} productVariant={productVariant} />
      ))}
    </Box>
  );
};

export default withTranslation(I18NS.Product)(ProductContent);
