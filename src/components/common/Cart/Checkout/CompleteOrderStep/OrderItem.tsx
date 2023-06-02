import Price from "@/components/common/Price";
import { Box, Grid, Image, Text } from "@/components/ui";
import { OrderItemFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface OrderItemProps extends WithTranslation {
  orderItem: OrderItemFragment;
}

const OrderItem: FC<OrderItemProps> = ({ orderItem, t }) => {
  return (
    <Box display={"flex"} gap={2}>
      <Box position={"relative"} overflow={"hidden"} borderRadius={0.25}>
        <Image priority src={orderItem.productVariant.product.media[0]?.url} alt={"Product variant thumbnail"} width={150} height={225} />
      </Box>
      <Box width={"100%"}>
        <Grid item xs={12}>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            <Box display={"flex"} gap={1}>
              <Text variant={"h3"}>{orderItem.productVariant.product.title}</Text>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
              <Text variant={"h4"} opacity={0.5}>{orderItem.productVariant.sku}</Text>
              <Price fontSize={24} amount={orderItem.price.amount} currency={orderItem.price.currency} />
            </Box>
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={1}>
                <Text variant={"p"}>{t("component.label.color")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.productVariant.color.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"p"}>{t("component.label.size")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.productVariant.size.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"p"}>{t("component.label.brand")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.productVariant.product.brand.name}</Text>
              </Box>
              <Box display={"flex"} gap={1}>
                <Text variant={"p"}>{t("component.label.quantity")}:</Text>
                <Text variant={"p"} color={"primary"}>{orderItem.quantity}</Text>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default withTranslation()(OrderItem);
