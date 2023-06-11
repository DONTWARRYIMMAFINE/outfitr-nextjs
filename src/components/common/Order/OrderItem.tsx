import Price from "@/components/common/Price";
import { Box, Grid, Image, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { OrderItemFragment } from "@/lib/graphql/schema.generated";
import { prepareBlurImage } from "@/lib/utils/image.helper";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface OrderItemProps extends WithTranslation {
  orderItem: OrderItemFragment;
}

const OrderItem: FC<OrderItemProps> = ({ orderItem, t }) => {
  return (
    <Box display={"flex"} gap={2}>
      <Box position={"relative"} width={180} height={225} borderRadius={0.25} overflow={"hidden"}>
        <Image
          src={orderItem.productVariant.product.media[0]?.url}
          blurDataURL={prepareBlurImage(
            orderItem.productVariant.product.media[0].url,
            Math.floor(orderItem.productVariant.product.media[0].width! / 10),
            Math.floor(orderItem.productVariant.product.media[0].height! / 10),
          )}
          placeholder={orderItem.productVariant.product.media[0].url ? "blur" : undefined}
          alt={"Product variant thumbnail"}
          style={{ objectFit: "cover" }}
          fill
        />
      </Box>
      <Box width={"100%"}>
        <Grid item xs={12}>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Box display={"flex"}>
              <Text variant={"h3"}>{orderItem.productVariant.product.title}</Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"p"} opacity={0.5}>{orderItem.productVariant.sku}</Text>
                <Price fontSize={20} amount={orderItem.price.amount} currency={orderItem.price.currency} />
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"p"}>{t("content.items.color.label")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.productVariant.color.name}</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"p"}>{t("content.items.size.label")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.productVariant.size.name}</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"p"}>{t("content.items.brand.label")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.productVariant.product.brand.name}</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <Text variant={"p"}>{t("content.items.quantity.label")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.quantity}</Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default withTranslation(I18NS.Order)(OrderItem);
