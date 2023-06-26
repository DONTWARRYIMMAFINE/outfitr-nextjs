import { Price } from "@/components/common";
import { Box, Grid, Image, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CartItemFragment } from "@/lib/graphql/schema.generated";
import { prepareBlurImage } from "@/lib/utils/image.helper";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CartTotalsItemProps extends WithTranslation {
  cartItem: CartItemFragment;
}

const CartTotalsItem: FC<CartTotalsItemProps> = ({ cartItem, t }) => {
  return (
    <Grid display={"flex"} gap={2}>
      <Grid item position={"relative"} overflow={"hidden"} width={85} height={125} borderRadius={0.25}>
        <Image
          src={cartItem.productVariant.product.media[0]?.url}
          blurDataURL={prepareBlurImage(
            cartItem.productVariant.product.media[0].url,
            Math.floor(cartItem.productVariant.product.media[0].width! / 10),
            Math.floor(cartItem.productVariant.product.media[0].height! / 10),
          )}
          placeholder={cartItem.productVariant.product.media[0].url ? "blur" : undefined}
          alt={"Product variant thumbnail"}
          style={{ objectFit: "cover" }}
          fill
        />
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
                <Text variant={"small"}>{t("content.cartTotals.item.color.label")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.productVariant.color.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("content.cartTotals.item.size.label")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.productVariant.size.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("content.cartTotals.item.brand.label")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.productVariant.product.brand.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"small"}>{t("content.cartTotals.item.quantity.label")}:</Text>
                <Text variant={"small"} color={"primary"}>{cartItem.quantity}</Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withTranslation(I18NS.Cart)(CartTotalsItem);
