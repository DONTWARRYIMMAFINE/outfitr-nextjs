import { Price } from "@/components/common";
import { Box, Divider, Grid, Text } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { OrderFragment } from "@/lib/graphql/schema.generated";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface OrderInfoProps extends WithTranslation {
  order: OrderFragment;
}

const OrderInfo: FC<OrderInfoProps> = ({ order, t }) => {
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Text variant={"p"} opacity={0.7} paragraph>{t("content.info.label")}</Text>
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("content.info.subtotal.label")}</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.subtotalPrice.amount} currency={order.subtotalPrice.currency} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("content.info.tax.label")}</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.taxPrice.amount} currency={order.taxPrice.currency} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("content.info.delivery.label")} ({order.deliveryMethod.name})</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.deliveryPrice.amount} currency={order.deliveryPrice.currency} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider variant={"fullWidth"} flexItem sx={{ borderStyle: "dashed" }} />
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("content.info.total.label")}</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.totalPrice.amount} currency={order.totalPrice.currency} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withTranslation(I18NS.Order)(OrderInfo);
