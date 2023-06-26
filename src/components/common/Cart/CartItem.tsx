import { Price } from "@/components/common";
import { Box, Grid, IconButton, Icons, Image, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { CartItemFragment } from "@/lib/graphql/schema.generated";
import { prepareBlurImage } from "@/lib/utils/image.helper";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CartItemProps extends WithTranslation {
  cartItem: CartItemFragment;
  onAddClick: (productVariantId: string) => void;
  onRemoveClick: (productVariantId: string) => void;
}

const CartItem: FC<CartItemProps> = ({ cartItem, onAddClick, onRemoveClick, t }) => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid container item xs={7}>
        <Grid position={"relative"} item xs={2} width={120} height={150} borderRadius={0.25} overflow={"hidden"}>
          <Image
            src={cartItem.productVariant.product.media[0].url}
            blurDataURL={prepareBlurImage(
              cartItem.productVariant.product.media[0].url,
              Math.floor(cartItem.productVariant.product.media[0].width! / 10),
              Math.floor(cartItem.productVariant.product.media[0].height! / 10),
            )}
            placeholder={cartItem.productVariant.product.media[0].url ? "blur" : undefined}
            alt={"Product variant image"}
            style={{ objectFit: "cover" }}
            fill
          />
        </Grid>
        <Grid display={"flex"} flexDirection={"column"} item xs={10} gap={1} paddingX={3}>
          <Text variant={"h4"} component={"h4"}>{cartItem.productVariant.product.title}</Text>
          <Text variant={"button"} opacity={0.7}>{cartItem.productVariant.sku}</Text>
          <Box display={"flex"} flexDirection={"column"}>
            <Box>
              <Text variant={"small"}>{t("content.list.item.brand.label")}: </Text>
              <Text variant={"small"} color={"primary"}>
                {cartItem.productVariant.product.brand.name}
              </Text>
            </Box>
            <Box>
              <Text variant={"small"}>{t("content.list.item.color.label")}: </Text>
              <Text variant={"small"} color={"primary"}>
                {cartItem.productVariant.color.name}
              </Text>
            </Box>
            <Box>
              <Text variant={"small"}>{t("content.list.item.size.label")}: </Text>
              <Text variant={"small"} color={"primary"}>
                {cartItem.productVariant.size.name}
              </Text>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={3} spacing={2} justifyContent={"center"} alignItems={"center"}>
        <Grid item>
          <IconButton
            disabled={cartItem.productVariant.stock === cartItem.quantity}
            onClick={() => onAddClick(cartItem.productVariant.id)}
            sx={{ bgcolor: "primary.main", width: 32, height: 32 }}
          >
            <Icons.Add />
          </IconButton>
        </Grid>
        <Grid item>
          <Text variant={"small"}>x{cartItem.quantity}</Text>
        </Grid>
        <Grid item>
          <IconButton onClick={() => onRemoveClick(cartItem.productVariant.id)} sx={{ bgcolor: "error.main", width: 32, height: 32 }}>
            <Icons.Remove />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Price fontSize={24} amount={cartItem.price.amount} currency={cartItem.price.currency} />
      </Grid>
    </Grid>
  );
};

export default withTranslation(I18NS.Cart)(CartItem);
