"use client";

import Price from "@/components/common/Price";
import { Box, Grid, IconButton, Icons, Image, Text } from "@/components/ui";
import { CartItemFragment } from "@/lib/graphql/schema.generated";
import { useTheme } from "@mui/material";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CartItemProps extends WithTranslation {
  cartItem: CartItemFragment;
  onAddClick: (productVariantId: string) => void;
  onRemoveClick: (productVariantId: string) => void;
}

const CartItem: FC<CartItemProps> = ({ cartItem, onAddClick, onRemoveClick, t }) => {
  const { shape } = useTheme();

  return (
    <Grid container padding={3} justifyContent={"center"} alignItems={"center"}>
      <Grid container item xs={7}>
        <Grid item xs={2}>
          <Image
            src={cartItem.image?.url!}
            alt={"Product variant image"}
            width={cartItem.image?.width! * 0.1}
            height={cartItem.image?.height! * 0.1}
            style={{ borderRadius: shape.borderRadius * 0.25 }}
          />
        </Grid>
        <Grid display={"flex"} flexDirection={"column"} item xs={10} gap={1} paddingX={3}>
          <Text variant={"h4"} component={"h4"}>{cartItem.productTitle}</Text>
          <Text variant={"p"} opacity={0.7}>{cartItem.productVariant.sku}</Text>
          <Box display={"flex"} flexDirection={"column"}>
            <Box>
              <Text variant={"small"}>{t("component.label.color")}: </Text>
              <Text variant={"small"} color={"primary"}>
                {cartItem.productVariant.color.name}
              </Text>
            </Box>
            <Box>
              <Text variant={"small"}>{t("component.label.size")}: </Text>
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

export default withTranslation()(CartItem);
