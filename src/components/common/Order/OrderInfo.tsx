import Price from "@/components/common/Price";
import { Box, Divider, Grid, Text } from "@/components/ui";
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
        <Text variant={"p"} opacity={0.7} paragraph>Order Info</Text>
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("component.label.subtotal")}</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.subtotalPrice.amount} currency={order.subtotalPrice.currency} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("component.label.tax")}</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.taxPrice.amount} currency={order.taxPrice.currency} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Text variant={"p"}>{t("component.label.delivery")} ({order.deliveryMethod.name})</Text>
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
        <Text variant={"p"}>{t("component.label.total")} ({order.deliveryMethod.name})</Text>
      </Grid>
      <Grid item xs={6}>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Price fontSize={18} amount={order.totalPrice.amount} currency={order.totalPrice.currency} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default withTranslation()(OrderInfo);
