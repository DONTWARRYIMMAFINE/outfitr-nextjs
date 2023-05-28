import Price from "@/components/common/Price";
import { Box, Image, Text } from "@/components/ui";
import { CartItemFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface CartTotalsItemProps extends WithTranslation {
  cartItem: CartItemFragment;
}

const CartTotalsItem: FC<CartTotalsItemProps> = ({ cartItem, t }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box position={"relative"} width={cartItem.image?.width! * 0.08} height={cartItem.image?.height! * 0.08} borderRadius={0.1} overflow={"hidden"}>
        <Image src={cartItem.image?.url!} alt={"Product variant thumbnail"} style={{ objectFit: "contain" }} fill />
      </Box>
      <Box display={"flex"} flexDirection={"column"} gap={1}>
        <Box display={"flex"} gap={4} justifyContent={"space-between"} alignItems={"center"}>
          <Text variant={"small"} opacity={0.5}>{cartItem.productVariant.sku}</Text>
          <Price amount={cartItem.price.amount} currency={cartItem.price.currency} />
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Text variant={"small"}>{t("component.label.color")}:</Text>
            <Text variant={"small"} color={"primary"}>{cartItem.productVariant.color.name}</Text>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Text variant={"small"}>{t("component.label.size")}:</Text>
            <Text variant={"small"} color={"primary"}>{cartItem.productVariant.size.name}</Text>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Text variant={"small"}>{t("component.label.quantity")}:</Text>
            <Text variant={"small"} color={"primary"}>{cartItem.quantity}</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default withTranslation()(CartTotalsItem);
