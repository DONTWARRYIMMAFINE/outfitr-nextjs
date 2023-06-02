import Price from "@/components/common/Price";
import { Box, Grid, Image, Text } from "@/components/ui";
import { CartItemFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CartTotalsItemProps extends WithTranslation {
  cartItem: CartItemFragment;
}

const CartTotalsItem: FC<CartTotalsItemProps> = ({ cartItem, t }) => {
  return (
    <Grid display={"flex"} gap={2}>
      <Grid item position={"relative"} overflow={"hidden"} width={85} height={125} borderRadius={0.25}>
        <Image priority src={cartItem.productVariant.product.media[0]?.url} alt={"Product variant thumbnail"} style={{ objectFit: "cover" }} fill />
      </Grid>
      <Grid container item xs={9}>
        <Grid item xs={12}>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Text variant={"small"} opacity={0.5}>{cartItem.productVariant.sku}</Text>
              <Price amount={cartItem.price.amount} currency={cartItem.price.currency} />
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("component.label.color")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.productVariant.color.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("component.label.size")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.productVariant.size.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("component.label.brand")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.productVariant.product.brand.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("component.label.quantity")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.quantity}</Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTranslation()(CartTotalsItem);
