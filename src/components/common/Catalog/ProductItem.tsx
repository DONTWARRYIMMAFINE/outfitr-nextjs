"use client";

import { Dot } from "@/components/common";
import ModifyWishlistButton from "@/components/common/ModifyWishlistButton";
import PriceRange from "@/components/common/PriceRange";
import { Box, Button, Image, Text } from "@/components/ui";
import { Card, CardActions, CardContent, CardMedia } from "@/components/ui/Card";
import { I18NS } from "@/constants/I18NS";
import { ProductFragment, Sizes } from "@/lib/graphql/schema.generated";
import { prepareBlurImage } from "@/lib/utils/image.helper";
import { map, sortBy, uniqBy } from "lodash";
import { useRouter } from "next-intl/client";
import { WithTranslation, withTranslation } from "react-i18next";

const sizeOrder = {
  [Sizes.Xxs]: 1,
  [Sizes.Xs]: 2,
  [Sizes.S]: 3,
  [Sizes.M]: 4,
  [Sizes.L]: 5,
  [Sizes.Xl]: 6,
  [Sizes.Xxl]: 7,
  [Sizes.Xxxl]: 8,
} as const;

export interface ProductCardProps extends WithTranslation {
  product: ProductFragment;
  width?: number;
}

const ProductItem = ({ product, width = 235, t }: ProductCardProps) => {
  const router = useRouter();
  const onClick = () => {
    // Redirect to PDP
    router.push(`/product/${product?.id}`);
  };

  const colors = uniqBy(map(product.productVariants, "color"), "id");
  const sizes = uniqBy(map(product.productVariants, "size"), "id").sort((a, b) => sizeOrder[a.code] - sizeOrder[b.code])

  return (
    <Card sx={{ position: "relative", bgcolor: "background.body", maxWidth: width }}>
      <CardMedia
        sx={{
          width: width * 0.8,
          height: width * 1,
          borderRadius: 0.15,
          overflow: "hidden",
          cursor: "pointer",
          bgcolor: "background.component",
          position: "relative",
        }}
      >
        <Image
          onClick={onClick}
          src={product.media[0]?.url}
          blurDataURL={prepareBlurImage(
            product.media[0]?.url,
            Math.floor(product.media[0]?.width! / 10),
            Math.floor(product.media[0]?.height! / 10),
          )}
          placeholder={product.media[0]?.url ? "blur" : undefined}
          alt={"Oops"}
          style={{ objectFit: "cover" }}
          fill
        />
        <Box zIndex={100} position={"absolute"} top={0} left={0} padding={1} bgcolor={"background.textField"} borderRadius={0.5} sx={{opacity: 0.7}}>
          <Text variant={"small"} color={"primary"}>{product.brand.name}</Text>
        </Box>
        <ModifyWishlistButton sx={{ zIndex: 100, position: "absolute", top: 0, right: 0 }} productId={product.id} />
      </CardMedia>
      <CardContent sx={{ mt: "auto", width: "100%" }}>
        <Box display={"flex"} flexDirection={"column"} width={"100%"} gap={1}>
          <Text variant={"h4"}>{product.title}</Text>
          <PriceRange prices={map(product.productVariants, "price")} />
          <Text variant={"small"} opacity={0.7}>
            {t("content.productCard.colors.label")}
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} gap={1}>
            {colors.map(({ id, name, hex }) => (
              <Box
                key={id}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
              >
                <Dot radius={14} color={hex} />
                <Text key={id} variant={"tiny"}>{name}</Text>
              </Box>
            ))}
          </Box>
          <Text variant={"small"} opacity={0.7}>
            {t("content.productCard.sizes.label")}
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} gap={1}>
            {sizes.map(({ id, name }) => (
              <Text key={id} variant={"tiny"}>{name}</Text>
            ))}
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ width: "100%" }}>
        <Button
          variant={"primary"}
          size={"small"}
          onClick={onClick}
          fullWidth
        >
          {t("content.productCard.button.showDetails.label")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default withTranslation(I18NS.Catalog)(ProductItem);
