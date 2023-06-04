"use client";

import { Dot } from "@/components/common";
import ModifyWishlistButton from "@/components/common/ModifyWishlistButton";
import PriceRange from "@/components/common/PriceRange";
import { Box, Button, Image, Text } from "@/components/ui";
import { Card, CardActions, CardContent, CardMedia } from "@/components/ui/Card";
import { ProductFragment } from "@/lib/graphql/schema.generated";
import { map } from "lodash";
import { useRouter } from "next-intl/client";
import { WithTranslation, withTranslation } from "react-i18next";

const backgroundColors: string[] = ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD", "#F3F0EF", "#D5C3BB", "#DEEFC4"];

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
          alt={"Oops"}
          style={{ objectFit: "cover" }}
          fill
        />
        <ModifyWishlistButton sx={{ zIndex: 100, position: "absolute", top: 0, right: 0 }} productId={product.id} />
      </CardMedia>
      <CardContent sx={{ mt: "auto" }}>
        <Box display={"flex"} flexDirection={"column"} gap={1}>
          <Text variant={"h4"}>{product.title}</Text>
          <PriceRange prices={map(product.productVariants, "price")} />
          <Text variant={"small"} opacity={0.7}>
            {t("component.label.colors")}
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} gap={1}>
            {product.colors.map(({ id, name, hex }) => (
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
            {t("component.label.sizes")}
          </Text>
          <Box display={"flex"} flexWrap={"wrap"} gap={1}>
            {product.sizes.map(({ id, name }) => (
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
          {t("component.button.showDetails")}
        </Button>
      </CardActions>
    </Card>
  );
};

export default withTranslation()(ProductItem);
